import * as React from 'react';

function Blog5Page() {
  const socialEngineeringAttacks = [
    {
      title: 'Phishing',
      description: 'Phishing uses deceptive emails, websites, and text messages to steal confidential information by disguising as familiar entities.'
    },
    {
      title: 'Spear Phishing',
      description: 'Spear phishing targets individuals or businesses with emails that appear trustworthy, collecting personal data for cyber crimes.'
    },
    {
      title: 'Whaling',
      description: 'Whaling targets high-level executives to steal sensitive information or disrupt business processes through phishing or other methods.'
    },
    {
      title: 'Tailgating',
      description: 'Tailgating is a physical tactic where a criminal gains access to a building by following closely behind someone with access.'
    },
    {
      title: 'Baiting',
      description: 'Baiting offers something enticing, like free downloads, to trick victims into exposing their systems to malware.'
    },
    {
      title: 'Water-Holing',
      description: 'Water-holing infects websites commonly visited by a target group, eventually compromising a member’s system.'
    },
    {
      title: 'Vishing',
      description: 'Vishing uses voicemails to trick victims into acting quickly, often pretending to be from banks or law enforcement.'
    },
    {
      title: 'Pretexting',
      description: 'Pretexting involves pretending to be someone else to trick victims into giving up information, such as pretending to be customer support.'
    },
    {
      title: 'Quid Pro Quo',
      description: 'Quid pro quo scams involve offering a service in exchange for information, often by impersonating IT support.'
    },
    {
      title: 'Malware',
      description: 'Malware tricks victims into paying to remove fake viruses or installing malicious software, stealing information or money.'
    },
    {
      title: 'Voicemail Phishing and SMS Phishing',
      description: 'Voicemail phishing uses VoIP messages, and SMS phishing uses text messages to trick victims into revealing personal information.'
    },
    {
      title: 'False Identities',
      description: 'Attackers create false identities to gain trust and collect sensitive information, often using stolen data or social media.'
    }
  ];

  const protectionTips = [
    {
      title: 'Invest in Your People',
      description: 'Emphasize cyber security awareness to reduce human risk. Use free tools such as phishing simulations, ransomware simulations, and cyber security assessments to strengthen your organization.'
    },
    {
      title: 'Educate Your Team',
      description: 'Educate your team on the multiple types of social engineering scams. Use real-world examples to show how easy it is for anyone to be caught off guard by social engineering.'
    },
    {
      title: 'Create Internal Cyber Security Heroes',
      description: 'Create internal cyber security heroes committed to keeping your organization cyber secure. This encourages your employees to change their behavior.'
    },
    {
      title: 'Foster Environmental Support for Behavior Change',
      description: 'Create a work environment that inspires learning and encourages security awareness.'
    },
    {
      title: 'Read The Human Fix to Human Risk',
      description: 'Read The Human Fix to Human Risk to learn step-by-step guidelines on developing an effective security awareness program that reinforces proactive awareness.'
    },
    {
      title: 'Use a Flexible Training Model',
      description: 'Benefit from a flexible social engineering awareness training model that uses animated videos, interactive online training, managed security services, microlearning modules, and phishing simulations to provide continual support.'
    },
    {
      title: 'Provide Ongoing Communication and Campaigns',
      description: 'Provide ongoing communication and campaigns about social engineering, cyber security, phishing, ransomware, and the risks that can come with emails, URLs, attachments, phone calls, and human beings.'
    },
    {
      title: 'Use Proven Security Awareness Training Platforms',
      description: 'Use proven security awareness training and simulation training platforms to provide stimulating and effective security awareness education.'
    }
  ];

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
        Ways to Avoid Social Engineering Attacks
      </h1>
      <img 
        src="/assets/images/blogs/21.jpg" 
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
        What is Social Engineering
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Social engineering is a manipulation technique where cyber criminals exploit human trust to obtain confidential information, enabling further cyber crimes. Using disguised communication such as emails or calls, they trick individuals into revealing passwords or personal details.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        For example, a cyber criminal might use social engineering to convince an employee to divulge company passwords. The cyber criminal then uses these passwords to access corporate networks to steal data and install malware on the company network.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        All it takes is an email, phone call, or text message disguised as coming from a colleague, friend, or known company, and the cyber criminal has won. The cyber criminal may use a familiar yet urgent tone to convince the victim to update their banking information or tell the victim that they must provide their credit card information to claim their prize.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Defending against social engineering is difficult due to human unpredictability and the potential for victims to be caught off-guard. There is no way of knowing who will fall for a social engineering attack. Cyber criminals hope to catch the victim off-guard when they forget to remain alert to cyber attacks.
      </p>
      <img 
        src="/assets/images/blogs/22.jpg" 
        alt="Representation of cyber attack concept" 
        style={{ 
          width: '85%', 
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
        Why Is Social Engineering So Dangerous?
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Social engineering is so dangerous because people make mistakes. Although victims know they need to be suspicious of emails that promise refunds or phone calls that tell them they'll be arrested immediately if they don't provide their tax information, people get caught off-guard.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>Social engineering exploits human vulnerabilities, such as:</strong> 
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>Lack of security knowledge:</strong> One of the most prominent challenges organizations face regarding social engineering is that many employees lack the knowledge to identify and defend against these types of attacks.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>Trusting nature:</strong> Social engineers prey on people's trusting nature by pretending to be family members or pretend to be from a trusted organization like a bank or government agency.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        And they often target people who are more likely to share personal information on social media.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        <strong>Over-Curiosity:</strong> Generally, it's good to ask questions—but, unfortunately, an excessive amount of curiosity can be risky. If you're the type of person who always asks questions and tries to learn more about everything around you, you may be at risk for social engineering.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Social engineers use manipulation and deception to get others to do what they want. They often target curious people because they easily trick them into giving up information or doing something they shouldn't.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        If you're always asking questions and trying to learn more, be sure to do so safely and securely. Don't give out personal information or click on links from strangers.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Be cautious of who you talk to and what you say. Curiosity is an excellent quality, but it's important to be aware of the risks that come with it.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Social engineering success relies on human nature—being busy, not paying attention, being too trustworthy, complacency, and simply forgetting the basics of cyber security awareness. It is not unheard of for people to be repeat victims of social engineering attacks.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#555',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        It's much easier for cyber criminals to hack a human than a company network. For this exact reason, it's crucial that you focus on people-centric cyber security awareness training.
      </p>

      
      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        Common Types of Social Engineering Attacks
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        gap: '20px',
        marginBottom: '20px'
      }}>
        {socialEngineeringAttacks.map((attack, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '48%',
            boxSizing: 'border-box',
            textAlign: 'justify'
          }}>
            <h3 style={{ fontSize: '22px', color: '#0C8599', marginBottom: '10px' }}>{attack.title}</h3>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>{attack.description}</p>
          </div>
        ))}
      </div>

      <h2 style={{ 
        alignSelf: 'flex-start', 
        fontSize: '28px', 
        color: '#333',
        marginTop: '20px',
        marginBottom: '10px'
      }}>
        How to Protect Yourself from Social Engineering
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        gap: '20px',
        marginBottom: '20px'
      }}>
        {protectionTips.map((tip, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '48%',
            boxSizing: 'border-box',
            textAlign: 'justify'
          }}>
            <h3 style={{ fontSize: '22px', color: '#0C8599', marginBottom: '10px' }}>{tip.title}</h3>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog5Page;
