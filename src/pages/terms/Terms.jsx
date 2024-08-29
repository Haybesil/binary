import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Terms = () => {
  const TermsComp = (props) => {
    return (
      <>
        <div className=" flex flex-col gap-5 lg:gap-10">
          <div>
            <h1 className=" flex items-center text-white text-2xl lg:text-5xl font-bold tracking-wider">
              <span>{props.sn}</span>
              <span>{props.title}</span>
            </h1>
          </div>
          <div className=" w-[15vw] border border-[#353945]"></div>
          <div className=" text-[#9FA8BF] flex flex-col gap-5 lg:gap-10 lg:text-lg">
            <p>{props.para1}</p>
            <p>{props.para2}</p>
            <p>{props.para3}</p>
            <p>{props.para4}</p>
            <p>{props.para5}</p>
            <p>{props.para6}</p>
            <p>{props.para7}</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-[#141416] h-fit pt-36 px-6 lg:px-28 lg:py-52">
        <div className=" font-bold text-white text-3xl lg:text-5xl text-center mb-12 lg:mb-24 tracking-wider">
          Terms of Use
        </div>

        <div className=" flex flex-col gap-24">
          <TermsComp
            sn="1."
            title="TERMS OF USE"
            para1="1.1 Acceptance of the these terms of use. By accessing, reading, and making use of this Website and the Services, you are deemed to have reviewed, understood and accepted, on your own behalf and on behalf of any person on whose behalf you may be acting, these Terms of Use and agreed with the Company to be bound hereunder. For the purposes of these Terms of Use, “person” means any natural person, corporation, partnership, joint venture or any other incorporated or unincorporated entity, whether acting as an individual, fiduciary, or in any other capacity.If you do not wish to be bound by these Terms of Use, you may not use this Website or any of the Services."
            para2="1.2 Changes of terms of use and website. The Company reserves the right, exercisable at any time at its sole discretion, to add to or remove, modify or otherwise change any part of these Terms of Use. Changes will be effective immediately at such time as the Terms of Use are posted on this Website. You should check the Terms of Use for changes by checking the date this page was last updated. If any change to the Terms of Use is not acceptable to you, you must discontinue your use of this Website and the Services immediately. Your continued use of this Website or any of the Services after any changes to the Terms and Conditions will constitute your unqualified acceptance of the changes. The Company may terminate, change, suspend or discontinue any aspect of this Website or the Services at any time without notice. Without limiting the generality of the foregoing, the Company may change the availability of any features, institute new, or amend existing fees or charges for the use of the Website, the Services, or any features included in the Website or the Services, add, remove, modify or otherwise change any content on this Website, and impose limits on certain features or restrict access to parts or all of this Website. The Company reserves the right, but not the duty, to correct any errors or omissions in any portion of this Website at any time and without notice."
            para3="1.3 Other agreements. These Terms of Use are in addition to and supplementary to any other agreements that you or any person you represent have or may enter into with the Company concerning your dealings with them, including any information, products or services provided by the Company. In the event of any inconsistency or conflict between the provisions of these Terms of Use and the provisions of any other agreement that you or any person you represent have with the Company, the provisions of these Terms of Use shall govern regarding your access to and use of the Website and the Services."
          />

          <TermsComp
            sn="2."
            title="RISK WARNING"
            para1="2.1 Buying, selling and investing in cryptocurrencies can be risky. The risk of loss in trading or holding cryptocurrency can be substantial. You should therefore carefully consider whether trading or holding cryptocurrency is suitable for you in light of your financial condition. In considering whether to trade or hold cryptocurrency, you should be aware that the price or value of cryptocurrency can change rapidly, decrease, and potentially even fall to zero."
            para2="2.2 The cryptocurrencies market information relating to the past performance of an investment is not necessarily a guide to its performance in the future. The value of investments or income from them may go down as well as up. Like stocks and shares as well, cryptocurrencies are valued from second to second, their bid and offer value fluctuates sometimes widely. The degrees of fluctuation of prices vary significantly and the value of higher volatility funds may change suddenly. The value of investments may rise or fall due to the volatility of world markets, interest rates and capital values or, for investments held in overseas markets, changes in the rate of exchange in the currency in which the investments are denominated. You may not necessarily get back the amount you invested."
            para3="2.3 You know and understand cryptocurrency trading also has certain risks which can cause a complete loss to zero. As cryptocurrencies are no official currency and the legal status is still undefined, their legal nature is subject of change under different jurisdictions. Unlike official currencies, which are backed up by governments or other legal entities like the FED, ECB or others, cryptocurrencies are a private currency, generated by all the world. There is no central bank that could take corrective measures to protect the value of the cryptocurrencies at a possible crisis."
            para4="2.4 You know and understand cryptocurrency trading could be affected by hackers, change of laws, official restrictions, frauds, technical issues, collapse of infrastructure and many other possible threats."
            para5="2.5 All content provided through this website is only for your personal information and use, and is not intended to address your particular requirements or to be relied upon in making (or refraining from making) any specific investment or other decision. Such content shall not constitute any form of advice or recommendation by Wezudex. Furthermore, there may be additional risks that Wezudex have not foreseen or named in this Terms of Use."
            para6="2.6 Wezudex does not provide any investment advice in connection with the services contemplated by these Terms of Use. We only provide information on the price, range, volatility of cryptocurrencies. Any decisions to buy or sell cryptocurrencies are made on your decision solely. Wezudex will not be liable for any loss you might face."
            para7="2.7 If you are unsure about any specific investment or other decision, you should obtain appropriate expert independent advice and assess carefully whether your financial background is suitable for trading cryptocurrencies. Your decisions and investments are subject to your personal responsibility."
          />
          <TermsComp
            sn="3."
            title="REGISTRATION AND ACCOUNT OBLIGATIONS"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="3."
            title="REGISTRATION AND ACCOUNT OBLIGATIONS"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="4."
            title="IDENTITY VERIFICATION"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="5."
            title="EXCHANGE"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="6."
            title="TRANSACTIONS"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="7."
            title="FEES"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="8."
            title="SERVICE AVAILABILITY"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="9."
            title="SERVICE AVAILABILITY"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="10."
            title="TRANSACTIONS ON CRYPTOCURRENCY NETWORKS"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="11."
            title="SPECIAL CONDITION"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="12."
            title="PREMIUM ACCOUNT"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="13."
            title="CLOSURE OF YOUR ACCOUNT"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="14."
            title="RESTRICTION, SUSPENSION AND TERMINATION"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="15."
            title="PROHIBITED ACTIVITIES"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="16."
            title="DISCLAIMER OF WARRANTIES"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="17."
            title="LIMUTATION OF LIABILITY"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="18."
            title="DISPUTES"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="19."
            title="UNCLAIMED PROPERTY"
            para1="3.1 You must be 18 years old or older to register and use our service."
            para2="3.2 Only one registration per person is allowed. You must keep your registration information up to date."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5="3.5 You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have access to, or be using, your password or account, you must inform us as soon as possible by using online support.
            "
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
          <TermsComp
            sn="20."
            title="INDEMNITY"
            para1="20.1 You agree to defend, indemnify and hold harmless Payward (and each of our officers, directors, members, employees, agents and affiliates) from any claim, demand, action, damage, loss, cost or expense, including without limitation reasonable attorneysʼ fees, arising out or relating to (a) your use of, or conduct in connection with, our Services; (b) any Feedback you provide; (c) your violation of these Terms; or (d) your violation of any rights of any other person or entity. If you are obligated to indemnify us, we will have the right, in our sole discretion, to control any action or proceeding (at our expense) and determine whether we wish to settle it. "
            para2="Miscellaneous Entire Agreement; Order of Precedence. These Terms contain the entire agreement, and supersede all prior and contemporaneous understandings between the parties regarding the Services. These Terms do not alter the terms or conditions of any other electronic or written agreement you may have with Payward for the Services or for any other Payward product or service or otherwise. In the event of any conflict between these Terms and any other agreement you may have with Payward, the terms of that other agreement will control only if these Terms are specifically identified and declared to be overridden by such other agreement."
            para3="3.3 You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you short notice. You must keep your password confidential.
            "
            para4="3.4 You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else use your account or (4) use anyone else's account.
            "
            para5=".6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para6="3.6 From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for certain reasons."
            para7="3.7 You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures as confidential, and you must not disclose it to any third party. Wezudex has the right to disable any account, if in our opinion you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user."
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
