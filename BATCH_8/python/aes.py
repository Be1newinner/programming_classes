from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os


def aes_gcm_encrypt(
    key: bytes, plaintext: bytes, aad: bytes = b""
) -> tuple[bytes, bytes]:
    if len(key) not in (16, 24, 32):
        raise ValueError("AES-GCM key must be (16/24/32 bytes)")
    aesgcm = AESGCM(key)
    nonce = os.urandom(12)
    ct_and_tag = aesgcm.encrypt(nonce, plaintext, aad)
    return nonce, ct_and_tag


def aes_gcm_decrypt(
    key: bytes, nonce: bytes, ciphertext: bytes, aad: bytes = b""
) -> bytes:
    if len(nonce) != 12:
        raise ValueError("AES-GCM nonce should be 12 bytes")
    aesgcm = AESGCM(key)
    plaintext = aesgcm.decrypt(nonce, ciphertext, aad)
    return plaintext


key = os.urandom(32)  # THIS WILL GIVE OUTPUT IN BYTES FORMAT
aad = b"context-bound-metadata"
plaintext = b"""If some children are familiar with cows from the English rhyme Old MacDonald had a farm with cows moo-ing, others would have seen them at their homes or on some farms. Children are fascinated by cows because of their gentle and harmless nature. We often see that cows would pass by us without causing any trouble and they never seem to be in a hurry even while we try to move them by honking our car horns.

A cow is an interesting animal to write about. Let us understand the appearance and abilities of a cow through this essay and your children can take relevant points from it to write their essays."""

nonce, ciphertext = aes_gcm_encrypt(key, plaintext, aad)

print(
    "Key:", key.hex()
)  # WE will use hex() method for converting bytes into hexadecimal format
# print("Nonce:", nonce.hex())
print("Ciphertext:", ciphertext.hex())
# print("Tag:", tag.hex())

recovered = aes_gcm_decrypt(key, nonce, ciphertext, aad)
print("Recovered:", recovered)
