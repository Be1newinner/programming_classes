from cryptography.hazmat.primitives.ciphers.aead import ChaCha20Poly1305
import os


def chacha20_poly1305_encrypt(
    key: bytes, plaintext: bytes, aad: bytes = b""
) -> tuple[bytes, bytes, bytes]:
    """
    Returns (nonce, ciphertext, tag). cryptography returns ciphertext||tag (16-byte tag).
    """
    if len(key) != 32:
        raise ValueError("ChaCha20-Poly1305 key must be 256 bits (32 bytes)")
    aead = ChaCha20Poly1305(key)
    nonce = os.urandom(12)  # 96-bit nonce
    ct_and_tag = aead.encrypt(nonce, plaintext, aad)
    ciphertext, tag = ct_and_tag[:-16], ct_and_tag[-16:]
    return nonce, ciphertext, tag


def chacha20_poly1305_decrypt(
    key: bytes, nonce: bytes, ciphertext: bytes, tag: bytes, aad: bytes = b""
) -> bytes:
    if len(nonce) != 12:
        raise ValueError("ChaCha20-Poly1305 nonce should be 12 bytes")
    aead = ChaCha20Poly1305(key)
    ct_and_tag = ciphertext + tag
    plaintext = aead.decrypt(nonce, ct_and_tag, aad)  # Raises InvalidTag on failure
    return plaintext


if __name__ == "__main__":
    # Example usage
    key = os.urandom(32)  # 256-bit key
    aad = b"associated-data"
    plaintext = b"secret message"

    nonce, ciphertext, tag = chacha20_poly1305_encrypt(key, plaintext, aad)
    print("ChaCha20-Poly1305")
    print("Key:", key.hex())
    print("Nonce:", nonce.hex())
    print("Ciphertext:", ciphertext.hex())
    print("Tag:", tag.hex())

    recovered = chacha20_poly1305_decrypt(key, nonce, ciphertext, tag, aad)
    print("Recovered:", recovered)
