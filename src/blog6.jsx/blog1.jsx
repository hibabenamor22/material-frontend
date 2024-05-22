import * as React from 'react';

function Blog1Page() {
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
        Protecting Your Assets: The Importance of Penetration Testing in Cybersecurity
      </h1>
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        What do we mean by Penetration Testing?
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Penetration testing, commonly referred to as “pen testing” or “ethical hacking,” is the process of emulating an online attack on a computer system, network, or web application in order to find flaws and evaluate the security of the system.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        To make sure that a company’s data and systems are safeguarded against potential dangers, this type of testing is frequently carried out by certified ethical hackers or cybersecurity experts.
      </p>
      <img 
        src="/assets/images/blogs/13.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }} 
      />
      
      {/* Types of Penetration Testing */}
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        Types of Penetration Testing
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>White Box Testing:</strong> It examines the code and internal structure of the product being tested while giving testers complete access to a system or target network of an organization. White box testing is sometimes referred to as transparent, open glass, clear box, and code-based testing.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>Black Box Testing:</strong> A sort of functional and behavioral testing in which testers are not provided with any system knowledge. Black box testing, in which a real-world attack is conducted to determine the system’s vulnerabilities, is often done by organizations using ethical hackers.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>Grey Box Testing:</strong> White box and black box testing methods are combined to create grey box testing. It gives testers a limited understanding of the system, including low-level credentials, logical flow diagrams, and network maps. Finding potential code and functionality problems is the major goal of grey box testing.
      </p>
      <img 
        src="/assets/images/blogs/14.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '45%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }} 
      />
      
      {/* Four-Step Process of Penetration Testing */}
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        Four-Step Process of Penetration Testing
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>1.Reconnaissance:</strong> This is the initial phase of the penetration test, where the tester performs OSINT about the target system, such as IP addresses, open ports, and software versions.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>2.Vulnerability Scanning:</strong> The tester searches the target system for known vulnerabilities at this step using automated & manual techniques. Testers may utilize a variety of scanning technologies to further investigate the system and its flaws based on the findings of the preliminary phase. 
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>3.Exploitation:</strong> If vulnerabilities are found during the scanning phase, the tester will attempt to exploit them to gain access to the system.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>4.Reporting:</strong> After the penetration test is complete, the tester will document their findings and provide recommendations for mitigating vulnerabilities.
      </p>
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        Need for Penetration Testing
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        A penetration test, which simulates a cyberattack, sheds light on a system’s weakest points. Additionally, it acts as a mitigation strategy, allowing organizations to repair the discovered gaps before threat actors do.
      </p>
      <img 
        src="/assets/images/blogs/15.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '45%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }} 
      />
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
       <strong>Risk Assessment:</strong>   Most businesses are at risk as a result of the sharp rise in distributed DoS, phishing, and ransomware & malware assaults. The ramifications of a successful cyber attack have never been worse given how dependent organizations are on technology. An organization could not be able to access the servers, networks, and devices it needs to operate if it is subject to a ransomware assault, for example. Pen testing simulates the actions of a hacker to find and address cybersecurity threats before they are used against you.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>Security Awareness :</strong> The techniques used by cybercriminals change along with technology. Businesses need to be able to update their security measures at the same rate as attacks if they want to successfully defend themselves and their assets against them. Organizations may rapidly and efficiently identify the components of their systems that are particularly vulnerable to contemporary hacking tactics, update those components, and replace them by hiring trained ethical hackers.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
         <strong>Compliance:</strong> Pen testing is an element of compliance activities in a number of industries, including banking, healthcare, and service providers. Pen tests must adhere to common requirements, including Service Organization Control 2 (SOC 2), HIPAA, and the Payment Card Industry Data Security Standard (PCI DSS). Therefore, organizations may keep on top of their compliance requirements by undertaking routine pen testing.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>Reputation :</strong> The reputation of a business may be at risk from a data breach, particularly if it becomes public. Investors might be reluctant to invest in a company that doesn’t take its cyber defense seriously, and customers may cease trusting the company and buying its products. A company’s reputation is safeguarded by penetration testing, which provides proactive mitigation techniques.
      </p>
    </div>
  );
}

export default Blog1Page;
      
    
