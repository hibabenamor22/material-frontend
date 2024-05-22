import * as React from 'react';

function Blog3Page() {
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
        Top 10 most common cyber attacks!
      </h1>
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginBottom: '10px'
      }}>
        What is a Cyber Attack?
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        A cyber attack refers to an action designed to target a computer or any element of a computerized information system to change, destroy, or steal data, as well as exploit or harm a network. Cyber attacks have been on the rise, in sync with the digitization of business that has become more and more popular in recent years.
      </p>
      <img 
        src="/assets/images/blogs/2.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
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
        1. Denial-of-Service (DoS) Attacks
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        A Denial-of-Service (DoS) attack is a malicious, targeted attack that floods a network with false requests in order to disrupt business operations.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        In a DoS attack, users are unable to perform routine and necessary tasks, such as accessing email, websites, online accounts, or other resources that are operated by a compromised computer or network. While most DoS attacks do not result in lost data and are typically resolved without paying a ransom, they cost the organization time, money, and other resources in order to restore critical business operations.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        The difference between DoS and Distributed Denial of Service (DDoS) attacks has to do with the origin of the attack. DoS attacks originate from just one system while DDoS attacks are launched from multiple systems. DDoS attacks are faster and harder to block than DoS attacks because multiple systems must be identified and neutralized to halt the attack.
      </p>
      <img 
        src="/assets/images/blogs/3.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        2. Phishing Attacks
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        A phishing attack occurs when a malicious actor sends emails that seem to be coming from trusted, legitimate sources in an attempt to grab sensitive information from the target. Phishing attacks combine social engineering and technology and are so-called because the attacker is, in effect, “fishing” for access to a forbidden area by using the “bait” of a seemingly trustworthy sender.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        To execute the attack, the bad actor may send a link that brings you to a website that then fools you into downloading malware such as viruses, or giving the attacker your private information. In many cases, the target may not realize they have been compromised, which allows the attacker to go after others in the same organization without anyone suspecting malicious activity.
      </p>
      <img 
        src="/assets/images/blogs/4.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        3. Ransomware
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        With Ransomware, the victim’s system is held hostage until they agree to pay a ransom to the attacker. After the payment has been sent, the attacker then provides instructions regarding how the target can regain control of their computer. The name "ransomware” is appropriate because the malware demands a ransom from the victim.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        In a ransomware attack, the target downloads ransomware, either from a website or from within an email attachment. The malware is written to exploit vulnerabilities that have not been addressed by either the system’s manufacturer or the IT team. The ransomware then encrypts the target's workstation. At times, ransomware can be used to attack multiple parties by denying access to either several computers or a central server essential to business operations.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Affecting multiple computers is often accomplished by not initiating systems captivation until days or even weeks after the malware's initial penetration. The malware can send AUTORUN files that go from one system to another via the internal network or Universal Serial Bus (USB) drives that connect to multiple computers. Then, when the attacker initiates the encryption, it works on all the infected systems simultaneously.
      </p>
      <img 
        src="/assets/images/blogs/5.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        4. Password Attacks
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Passwords are the access verification tool of choice for most people, so figuring out a target’s password is an attractive proposition for a hacker. This can be done using a few different methods. Often, people keep copies of their passwords on pieces of paper or sticky notes around or on their desks. An attacker can either find the password themselves or pay someone on the inside to get it for them.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        An attacker may also try to intercept network transmissions to grab passwords not encrypted by the network. They can also use social engineering, which convinces the target to input their password to solve a seemingly “important” problem. In other cases, the attacker can simply guess the user’s password, particularly if they use a default password or one that is easy to remember such as “1234567.”
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Attackers also often use brute-force methods to guess passwords. A brute-force password hack uses basic information about the individual or their job title to try to guess their password. For example, their name, birthdate, anniversary, or other personal but easy-to-discover details can be used in different combinations to decipher their password. Information that users put on social media can also be leveraged in a brute-force password hack. What the individual does for fun, specific hobbies, names of pets, or names of children are sometimes used to form passwords, making them relatively easy to guess for brute-force attackers.
      </p>
      <img 
        src="/assets/images/blogs/6.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        5. SQL Injection Attacks
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Structured Query Language (SQL) injection is a common method of taking advantage of websites that depend on databases to serve their users. Clients are computers that get information from servers, and an SQL attack uses an SQL query sent from the client to a database on the server. The command is inserted, or “injected”, into a data plane in place of something else that normally goes there, such as a password or login. The server that holds the database then runs the command and the system is penetrated.
      </p>
      
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        If an SQL injection succeeds, several things can happen, including the release of sensitive data or the modification or deletion of important data. Also, an attacker can execute administrator operations like a shutdown command, which can interrupt the function of the database.
      </p>
      <img 
        src="/assets/images/blogs/12.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />

      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        6. URL Interpretation Attacks
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        With URL interpretation, attackers alter and fabricate certain URL addresses and use them to gain access to the target’s personal and professional data. This kind of attack is also referred to as URL poisoning. The name “URL interpretation” comes from the fact that the attacker knows the order in which a web-page’s URL information needs to be entered. The attacker then “interprets” this syntax, using it to figure out how to get into areas they do not have access to.
      </p>
      
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        To execute a URL interpretation attack, a hacker may guess URLs they can use to gain administrator privileges to a site or to access the site’s back end to get into a user’s account. Once they get to the page they want, they can manipulate the site itself or gain access to sensitive information about the people who use it.
      </p>

      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        For example, if a hacker attempts to get into the admin section of a site called GetYourKnowledgeOn.com, they may type in http://getyourknowledgeon.com/admin, and this will bring them to an admin login page. In some cases, the admin username and password may be the default "admin" and "admin" or very easy to guess. An attacker may also have already figured out the admin’s password or narrowed it down to a few possibilities. The attacker then tries each one, gains access, and can manipulate, steal, or delete data at will.
      </p>
      <img 
        src="/assets/images/blogs/7.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        7. DNS Spoofing
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        With Domain Name System (DNS) spoofing, a hacker alters DNS records to send traffic to a fake or “spoofed” website. Once on the fraudulent site, the victim may enter sensitive information that can be used or sold by the hacker. The hacker may also construct a poor-quality site with derogatory or inflammatory content to make a competitor company look bad.
      </p>
      
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        In a DNS spoofing attack, the attacker takes advantage of the fact that the user thinks the site they are visiting is legitimate. This gives the attacker the ability to commit crimes in the name of an innocent company, at least from the perspective of the visitor.
      </p>
      <img 
        src="/assets/images/blogs/8.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        8. XSS Attacks
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        With XSS, or cross-site scripting, the attacker transmits malicious scripts using clickable content that gets sent to the target’s browser. When the victim clicks on the content, the script is executed. Because the user has already logged into a web application’s session, what they enter is seen as legitimate by the web application. However, the script executed has been altered by the attacker, resulting in an unintended action being taken by the “user.”
      </p>
      
      
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        For example, an XSS attack may change the parameters of a transfer request sent through an online banking application. In the falsified request, the intended recipient of the transferred money has their name replaced with that of the attacker. The attacker may also change the amount being transferred, giving themselves even more money than the target initially intended to send.
      </p>
      <img 
        src="/assets/images/blogs/9.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        9. Trojan Horses
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        A Trojan horse attack uses a malicious program that is hidden inside a seemingly legitimate one. When the user executes the presumably innocent program, the malware inside the Trojan can be used to open a backdoor into the system through which hackers can penetrate the computer or network. This threat gets its name from the story of the Greek soldiers who hid inside a horse to infiltrate the city of Troy and win the war. Once the “gift” was accepted and brought within the gates of Troy, the Greek soldiers jumped out and attacked. In a similar way, an unsuspecting user may welcome an innocent-looking application into their system only to usher in a hidden threat.
      </p>
      <img 
        src="/assets/images/blogs/10.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        10. Web Attacks
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Web attacks refer to threats that target vulnerabilities in web-based applications. Every time you enter information into a web application, you are initiating a command that generates a response. For example, if you are sending money to someone using an online banking application, the data you enter instructs the application to go into your account, take money out, and send it to someone else’s account. Attackers work within the frameworks of these kinds of requests and use them to their advantage.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Some common web attacks include SQL injection and cross-site scripting (XSS), which will be discussed later in this article. Hackers also use cross-site request forgery (CSRF) attacks and parameter tampering. In a CSRF attack, the victim is fooled into performing an action that benefits the attacker. For example, they may click on something that launches a script designed to change the login credentials to access a web application. The hacker, armed with the new login credentials, can then log in as if they are the legitimate user.
      </p>
      
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Parameter tampering involves adjusting the parameters that programmers implement as security measures designed to protect specific operations. The operation’s execution depends on what is entered in the parameter. The attacker simply changes the parameters, and this allows them to bypass the security measures that depended on those parameters.
      </p>
      <img 
        src="/assets/images/blogs/11.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '35%', 
          height: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px' 
        }} 
      />
    </div>
  );
}

export default Blog3Page;
