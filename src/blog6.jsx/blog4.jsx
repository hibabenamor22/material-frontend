import * as React from 'react';

function Blog4Page() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: '#f0f4f8', 
      padding: '20px', 
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '1200px',
      margin: 'auto'
    }}>
      <h1 style={{ 
        color: '#0C8599', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: '36px',
        marginBottom: '20px'
      }}>
        What is Cryptography?
      </h1>
      <img 
        src="/assets/images/blogs/18.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '70%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }} 
      />
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        Cryptography Definition
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Cryptography is the process of hiding or coding information so that only the person a message was intended for can read it. The art of cryptography has been used to code messages for thousands of years and continues to be used in bank cards, computer passwords, and ecommerce.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Modern cryptography techniques include algorithms and ciphers that enable the encryption and decryption of information, such as 128-bit and 256-bit encryption keys. Modern ciphers, such as the Advanced Encryption Standard (AES), are considered virtually unbreakable.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        A common cryptography definition is the practice of coding information to ensure only the person that a message was written for can read and process the information. This cybersecurity practice, also known as cryptology, combines various disciplines like computer science, engineering, and mathematics to create complex codes that hide the true meaning of a message.
      </p>

      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        The Importance of Cryptography
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Cryptography remains important to protecting data and users, ensuring confidentiality, and preventing cyber criminals from intercepting sensitive corporate information. Common uses and examples of cryptography include the following:
      </p>
      
      <h3 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '24px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        1.Privacy and confidentiality
      </h3>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Individuals and organizations use cryptography on a daily basis to protect their privacy and keep their conversations and data confidential. Cryptography ensures confidentiality by encrypting sent messages using an algorithm with a key only known to the sender and recipient. A common example of this is the messaging tool WhatsApp, which encrypts conversations between people to ensure they cannot be hacked or intercepted. 
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Cryptography also secures browsing, such as with virtual private networks (VPNs), which use encrypted tunnels, asymmetric encryption, and public and private shared keys.
      </p>
      
      <h3 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '24px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        2.Authentication
      </h3>
      
      <h3 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '24px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        3.Integrity
      </h3>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Similar to how cryptography can confirm the authenticity of a message, it can also prove the integrity of the information being sent and received. Cryptography ensures information is not altered while in storage or during transit between the sender and the intended recipient. For example, digital signatures can detect forgery or tampering in software distribution and financial transactions.
      </p>
      
      <h3 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '24px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        4.Nonrepudiation
      </h3>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Cryptography confirms accountability and responsibility from the sender of a message, which means they cannot later deny their intentions when they created or transmitted information. Digital signatures are a good example of this, as they ensure a sender cannot claim a message, contract, or document they created to be fraudulent. Furthermore, in email nonrepudiation, email tracking makes sure the sender cannot deny sending a message and a recipient cannot deny receiving it.
      </p>

 
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        Types of Cryptographic Algorithms
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        There are many types of cryptographic algorithms available. They vary in complexity and security, depending on the type of communication and the sensitivity of the information being shared.
      </p>
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        1.Secret Key Cryptography
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Secret key cryptography, also known as symmetric encryption, uses a single key to encrypt and decrypt a message. The sender encrypts the plaintext message using the key and sends it to the recipient who then uses the same key to decrypt it and unlock the original plaintext message.
      </p>
      <h3 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '25px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        *Stream ciphers
      </h3>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Stream ciphers work on a single bit or byte at any time and constantly change the key using feedback mechanisms. A self-synchronizing stream cipher ensures the decryption process stays in sync with the encryption process by recognizing where it sits in the bit keystream. A synchronous stream cipher generates the keystream independently of the message stream and generates the same keystream function at both the sender and the receiver.
      </p>
      <h3 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '25px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        *Block ciphers
      </h3>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Block ciphers encrypt one block of fixed-size data at a time. It will always encrypt a plaintext data block to the same ciphertext when the same key is used. A good example of this is the Feistel cipher, which uses elements of key expansion, permutation, and substitution to create vast confusion and diffusion in the cipher. 
      </p>
      <img 
        src="/assets/images/blogs/19.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '40%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }} 
      />
       <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        2.Public Key Cryptography
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Public key cryptography (PKC), or asymmetric cryptography, uses mathematical functions to create codes that are exceptionally difficult to crack. It enables people to communicate securely over a nonsecure communications channel without the need for a secret key. For example, proxy reencryption enables a proxy entity to reencrypt data from one public key to another without requiring access to the plaintext or private keys. A common PKC type is multiplication vs. factorization.
      </p>
      <h3 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '25px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        *RSA
      </h3>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        RSA was the first and remains the most common PKC implementation. The algorithm is named after its MIT mathematician developers, Ronald Rivest, Adi Shamir, and Leonard Adleman, and is used in data encryption, digital signatures, and key exchanges. It uses a large number that is the result of factoring two selected prime numbers. It is impossible for an attacker to work out the prime factors, which makes RSA especially secure.
      </p>
      <h3 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '25px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        *ECC
      </h3>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        ECC is a PKC algorithm based on the use of elliptic curves in cryptography. It is designed for devices with limited computing power or memory to encrypt internet traffic. A common use of ECC is in embedded computers, smartphones, and cryptocurrency networks like bitcoin, which consumes around 10% of the storage space and bandwidth that RSA requires.
      </p>
      <h3 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '25px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        *Diffie-Hellman and Key Exchange Algorithm (KEA)
      </h3>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        The Diffie-Hellman algorithm was devised in 1976 by Stanford University professor Martin Hellman and his graduate student Whitfield Diffie, who are considered to be responsible for introducing PKC as a concept. It is used for secret key exchanges and requires two people to agree on a large prime number. 

        KEA is a variation of the Diffie-Hellman algorithm and was proposed as a method for key exchange in the NIST/National Security Agency’s (NSA) Capstone project, which developed cryptography standards for public and government use.
      </p>
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        Types of Cryptographic Key Attacks and Risks
      </h2>
      <img 
        src="/assets/images/blogs/20.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '70%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }} 
      />
      
    </div>
  );
}


export default Blog4Page;
