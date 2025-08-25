from cryptography.hazmat.primitives.asymmetric import ed25519
from cryptography.hazmat.primitives import serialization

# --- Key generation ---
private_key = ed25519.Ed25519PrivateKey.generate()
public_key = private_key.public_key()

# --- Serialize keys ---
# Private key (PEM, PKCS8, unencrypted)
pem_priv = private_key.private_bytes(
    encoding=serialization.Encoding.PEM,
    format=serialization.PrivateFormat.PKCS8,
    encryption_algorithm=serialization.NoEncryption(),
)
# Public key (PEM, SubjectPublicKeyInfo)
pem_pub = public_key.public_bytes(
    encoding=serialization.Encoding.PEM,
    format=serialization.PublicFormat.SubjectPublicKeyInfo,
)

print(pem_priv.decode())
print(pem_pub.decode())

# --- Load keys back from PEM ---
loaded_priv = serialization.load_pem_private_key(pem_priv, password=None)
loaded_pub = serialization.load_pem_public_key(pem_pub)

# --- Sign / Verify ---
message = b"important message"
# message2 = b"important message"
signature = loaded_priv.sign(message)  # 64-byte signature

# print("Message (utf-8):", message.decode())

# Raises InvalidSignature on failure
loaded_pub.verify(signature, message)
print("Ed25519 signature verified")
