<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-05-10 17:46:47
 * @LastEditors: hean
 * @LastEditTime: 2025-06-02 22:18:13
-->
<template>
  <div class="bg-cultured font-dm-sans min-h-screen">
    <main>
        <TheNavbar @loginHandler="loginHandler" />
        <div class="bg-cultured">
            <div class="px-6 md:px-10 lg:px-10 xl:px-36 2xl:px-72 h-auto pt-4 md:pt-8 container mx-auto">
                <h1 class="font-dm-sans text-black font-bold text-xl antialiased"> Frequently Asked Questions</h1>
                <div  v-for="(item,index) in faqList" :key="index +999">
                    <h1 class="font-dm-sans text-black font-medium text-xl antialiased pt-8">{{ item.subName }}</h1>
                    <section class="flex flex-col md:flex-row mt-4" v-for="(d,i) in item.content" :key="i+10">
                        <div class="w-full">
                            <div>
                                <div class="bg-white rounded-lg shadow-lg p-4 mb-5">
                                    <el-collapse  @change="handleChange">
                                        <el-collapse-item title="Consistency" name="1">
                                            <template #title="{ isActive }">
                                            <div :class="['title-wrapper', { 'is-active': isActive }]">
                                                <h4 class="font-dm-sans text-black text-base font-medium antialiased">{{ d.title }}</h4>
                                            </div>
                                            </template>
                                            <div>
                                                <div class="mt-2 text-base font-dm-sans text-slate-500 font-normal antialiased prose" v-html="d.desc">


                                                </div>
                                            </div>
                                        </el-collapse-item>
                                    </el-collapse>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
                <div class="py-6">The above Q&A covers four major dimensions:platform introduction,account security,online consultation,and debt mediation.If you need to learn more about other service modules(such as contract review services),please contact the 24/7 AI customer service directly.</div>
            </div>
        </div>
        <TheFooter />
    </main>
    <LoginDialog :show.sync="showLoginDialog" @hide="showLoginDialog = false" ></LoginDialog>

  </div>
</template>

<script setup>
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";
import { ref ,defineEmits} from "vue";
const showLoginDialog = ref(false);
const loginHandler = () => {
    console.log("loginHandler");
    showLoginDialog.value = true;
};

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}

const faqList = ref([
    {
        subName:'About LawOnGo',
        content:[
            {
                title: 'What is LawOnGo?',
                desc:'LawOnGo is an AI-based legal platform that focuses on providing fast,legal,and user-friendly debt mediation solutions.</br>Through LawOnGo,you can easily access debt mediation services,legal consultations,and rights protection via your smartphone—no upfront fees and no need to visit a law firm.</br>LawOnGo is committed to helping the people of Indonesia deal with debt stress in a fair,secure,and humane manner.Supported by AI technology and a network of legal professionals,we offer:</br><ol></ol><uL><li>Legal and compliant online debt mediation</li></uL><uL><li>24/7 AI-powered legal consultations that are fast and confidential</li></uL><uL><li>Negotiation with creditors on your behalf</li></uL><uL><li> Data protection and legal assistance throughout the processLawOnGo believes that everyone should have access to affordable and reliable legal solutions,especially during tough times.We will accompany you on your journey to financial freedom.</li></uL></ol>'
            },
            {
                title: 'What are the core strengths of LawOnGo?',
                desc:'LawOnGo is committed to creating a professional,efficient,and trustworthy online legal service platform by integrating AI technology with legal resources.Our four core strengths include:<br/>1.Ai-Powered Smart Matching Mechanism</br>After users submit their questions or service requests,the system intelligently recommends the most suitable lawyer or mediation consultant within seconds,based on case type,service priority,and historical success cases.<br/>Matching dimensions include:legal expertise,case handling experience,user ratings,response speed,etc.</br>📌Advantage:Improves matching accuracy,saves waiting time,and ensures that every user finds the most appropriate legal assistance.</br>2.Integration of Top-tier National Legal Resources</br>LawOnGo has partnered with over 50+well-known law firms and legal teams,covering:<ol><ul><li>Debt mediation</li></ul><ul><li>Corporate law</li></ul><ul><li>Intellectual property</li></ul><ul><li>Labor disputes</li></ul><ul><li>Financial compliance</li></ul></ol></br/>These partnerships span major cities and key industry sectors nationwide,providing users with extensive professional support.</br>📌Advantage:Whether its a personal issue or a corporate need,users can obtain one-stop expert services on the platform.</br>3.One-Stop Online Full-Process Experience</br>From legal consultation→plan formulation→online mediation→agreement signing→performance tracking,everything can be completed within the LawOnGo App.</br>The platform supports electronic signatures,contract archiving,mediation record tracking,and follow-up services.</br>📌Advantage:Eliminates cumbersome offline processes,enhancing the efficiency and convenience of legal services.</br>.Zero-Risk,Flexible Payment Mechanism</br>We offer a variety of payment models to meet different user needs:<ol><ul><li>Results-oriented(pay after success)</li></ul><ul><li>Installment payments(0 down payment+flexible settlement)</li></ul><ul><li>Free AI Q&A services</li></ul></ol>No charge unless successful,safeguarding user interests.</br>📌Advantage:Lowers the barrier for first-time users,increasing trust and service conversion rates.</br>We promise:<ol><ul><li>100%Data Confidentiality:All uploaded materials and conversation content are strictly encrypted.</li></ul><ul><li>100%Genuine Lawyers:Each partner consultant is verified for identity and professional qualifications.</li></ul><ul><li>100%Visible Process:Every step of the progress is trackable on the platform,giving users full control.</li></ul></ol>'
            },
            {
                title: 'What types of services does LawOnGo provide?',
                desc:'LawOnGo offers a range of legal services and debt solutions designed to help Indonesians deal with financial stress in alegal,secure,and affordablemanner.Here are the main services provided by LawOnGo:<br/><ol><ul><li>Digital Debt Mediation</li></ul></ol>Professional legal mediation for debt settlement services.We help you negotiate with creditors,establish payment plans,and reach amicable agreements—no need to visit a law firm.<br/><ol><ul><li>AI-Based Legal Consultations(24/7)</li></ul></ol>Get quick answers to your legal questions anytime.Our AI system is always ready to help you understand your rights and obligations instantly,confidentially,and accurately.<br/><ol><ul><li>Debt Case Assistance</li></ul></ol>If you are facing aggressive debt collection,intimidation,or unethical behavior from debt collectors,we provide personal legal support.Our team is ready to offer legal assistance to protect your rights.<ol><ul><li>Preparation of Mediation Documents and Payment Agreements</li></ul></ol>Official legal document preparation services for your debt mediation outcomes,including installment payment agreements,settlement agreements,and reports to authorities when necessary.<ol><ul><li>Privacy Protection and Data Security</li></ul></ol>LawOnGo ensures the confidentiality of your personal data and transactions and will not share your information with third parties without permission.User security is our top priority.<br/>If you need legal services focused on resolving debt issues in a wise and dignified manner,LawOnGo is a trustworthy choice for you.'
            }
        ]
    },
    {
        subName:'Account and Security',
        content:[
            {
                title: 'How to register for a LawOnGo account?',
                desc:'<ol><ul><li> Open the official website or App and click on“Register.”</li></ul><ul><li>Enter your mobile phone number and receive the SMS verification code,or log in quickly using WeChat/Alipay.</li></ul><ul><li> Complete the basic information form:name,ID number,email address.</li></ul><ul><li>Upload a photo for facial recognition to enhance account security.</li></ul></ol>'
            },
            {
                title: 'What should I do if I forget my password?',
                desc:'<ol><ul><li>Click on the“Forgot Password”link on the login page.</li></ul><ul><li>Enter the email address or mobile number associated with your account.</li></ul><ul><li>You will receive a password reset link via email or a verification code via SMS.</li></ul><ul><li>Follow the instructions to set a new password.</li></ul></ol>'
            },
            {
                title: 'Is my personal data safe?',
                desc:'Data across the entire platform is stored with AES-256 encryption;<br/>Access to user information is restricted to authorized lawyers/mediators on a need-to-know basis;</br>Regular audits are conducted to ensure compliance with ISO27001 and local security regulations.'
            },
        ]
    },
    {
        subName:'Online Legal Consultation',
        content:[
            {
                title: 'How do I initiate an online legal consultation?',
                desc:'LawOnGo offers 24/7 online legal consultation services to help you quickly obtain professional advice.Here is the complete process for initiating a consultation:</br>✅Step 1:Access the Legal Consultation Module<ol><ul><li>Log in to the LawOnGo App,click on the“Legal Consultation”icon on the home page or“Consultation Services”in the navigation menu.</li></ul></ol><ol><ul><li> Select“Online Consultation”to enter the service page.</li></ul></ol>✅Step 2:Describe the Issue&Upload Materials<ol><ul><li>Clearly describe your issue,such as debt disputes,contract disputes,or collection harassment.</li></ul></ol><ol><ul><li>Upload relevant materials(e.g.,IOUs,contracts,chat record screenshots)to help the lawyer better understand your situation.</li></ul></ol>📎Tip:Providing complete materials will enhance the accuracy of the match and the efficiency of the consultation.</br>✅Step 3:Choose a Matching Lawyer/Mediator/Debt Advisor<ol><ul><li>The system will automatically recommend the most suitable expert based on your issue.</li></ul></ol><ol><ul><li>You can also manually browse lawyer profiles and select an expert proficient in the relevant field.</li></ul></ol>✅Step 4:Select the Consultation Mode</br>LawOnGo offers two modes to meet different user needs:<ol><ul><li>AI Simulated Q&A(Free)</li></ul></ol>→The intelligent system generates suggestions and reference answers instantly,suitable for quickly obtaining basic opinions.<ol><ul><li>One-on-One Human Consultation(Paid)</li></ul></ol>→Communicate in real-time with a licensed lawyer(via text/phone/video)to get targeted legal advice.</br>→The system supports both advance booking and instant connection.<br/>✅Step 5:Complete Payment&Start Consultation<ol><ul><li>If you choose one-on-one consultation,complete the payment according to the lawyers fee schedule.</li></ul></ol><ol><ul><li>After payment,you will immediately enter the exclusive session interface to start communicating with the lawyer.</li></ul></ol>💡Additional Notes:<ol><ul><li>All consultation records are stored encrypted and are visible only to the user and the lawyer.</li></ul></ol><ol><ul><li>LawOnGo strictly reviews the professional qualifications of partner lawyers to ensure that consultations are professional,secure,and reliable.</li></ul></ol><ol><ul><li>In case of urgent legal issues,it is recommended to choose“One-on-One Human Consultation”for timely support.</li></ul></ol>'
            },
            {
                title: 'What are the differences between AI simulated Q&A and human consultation?',
                desc:'AI Simulated Q&A(Free)<ol><ul><li>Technical Principle:The AI system generates response suggestions based on a vast database of real cases,legal provisions,and judicial interpretations.</li></ul></ol><ol><ul><li>Scope of Application:Suitable for handling basic,common,and frequently asked questions,such as:</li></ul></ol><ol><ul><li> What is legal debt collection?</li></ul></ol><ol><ul><li>How long after a debt is overdue will I be sued?</li></ul></ol><ol><ul><li>Can I refuse door-to-door debt collection?</li></ul></ol><ol><ul><li> Response Speed:Instantly generates replies without waiting.</li></ul></ol><ol><ul><li>Price:Free to use.</li></ul></ol><ol><ul><li>Advantages:</li></ul></ol><ol><ul><li>Quickly obtain directional advice.</li></ul></ol><ol><ul><li>No need to register complex information.</li></ul></ol>Human One-on-One Consultation(Paid)<ol><ul><li>Human One-on-One:Real lawyers provide online answers,suitable for complex legal matters or in-depth legal strategies.</li></ul></ol><ol><ul><li>Service Method:Licensed lawyers offer personalized answers through text,voice,or video.</li></ul></ol><ol><ul><li>Scope of Application:Suitable for handling complex,high-value,and strategy-guided matters,such as:</li></ul></ol><ol><ul><li>How can I negotiate installment payments with multiple platforms?</li></ul></ol><ol><ul><li>I have received a court summons,what should I do?</li></ul></ol><ol><ul><li>Can I sue the debt collector for harassment?</li></ul></ol>Service Content:<ol><ul><li>Case assessment</li></ul><ul><li>Analysis of applicable law</li></ul><ul><li>Specific action recommendations(such as filing a lawsuit,lodging a complaint,or preparing for negotiations)</li></ul><ul><li>Response Time:Typically enters the session within 5-10 minutes.</li></ul></ol>Advantages:<ol><ul><li>One-on-one communication,more focused on your issues</li></ul><ul><li>Obtain legal pathway advice and practical operation guidance</li></ul></ol>'
            },
        ]
    },
    {
        subName:'Debt Mediation Services',
        content:[
            {
                title: 'How to use LawOnGo for debt mediation?',
                desc:'<ol><ul><li>Click on“Debt Mediation”on the home page→Fill in information such as the lending platform,amount,and number of overdue days;</li></ul><ul><li>The AI assessment model generates a“Mediation Feasibility Report”and recommends multiple solutions;</li></ul><ul><li>Choose a service package and sign an electronic mediation agreement;</li></ul><ul><li>A dedicated mediation consultant initiates negotiations,with the entire process trackable online in a visual manner;</li></ul><ul><li>After an agreement is reached,a performance plan is automatically generated,and the system sends repayment reminders.</li></ul></ol>'
            },
            {
                title: 'What are the fees for debt mediation services?',
                desc:'Success Fee(Pay-After-Service)<ol><ul><li>Fee Structure:Fees are charged only after successful mediation.</li></ul><ul><li>Pricing Method:5%to 10%of the actual amount reduced is charged as the service fee.</li></ul><ul><li>Target Audience:Users who want to try with zero risk and are sensitive to costs.</li></ul><ul><li>Advantages:No upfront costs/No charge if unsuccessful/Results-oriented service</li></ul></ol>VIP Exclusive Package(Priority Service+Professional Protection)<ol><ul><li>Fee Structure:Fixed base service fee(priced based on the total amount of debt);if mediation is successful,an additional cashback reward from the platform is provided.</li></ul><ul><li> Added Benefits:One-on-one service with a dedicated lawyer/Priority mediation scheduling in the fast lane/Exclusive reports and negotiation support materials</li></ul><ul><li>Target Audience:Users with multiple debts,high amounts,and the need for quick processing</li></ul></ol>'
            },
            {
                title: 'What happens if the mediation fails?',
                desc:'If the official negotiation fails to reach a reduction,LawOnGo will fully refund the service fee;<br/>The system will automatically trigger a second round of solution recommendations,or hand over to the cooperating risk management team for further assistance.'
            },
            {
                title: "How to entrust LawOnGo to draft or review a contract?",
                desc:"<ol><ul><li>Select“Document Services”→“Contract Drafting/Review”on the platform.</li></ul><ul><li>Upload the existing contract or fill in the basic elements(information of the parties,rights and obligations).</li></ul><ul><li>The system AI will conduct an initial review and generate a contract draft,which you can preview online and suggest modifications.</li></ul><ul><li>After the lawyer consultant completes the customized modifications,you can sign and download the final version online.</li></ul></ol>"
            }
        ]
    },
    {
        subName:'Pro Bono and Public Interest Services',
        content:[
            {
                title: "How can I participate in LawOnGo's Pro Bono public interest projects?",
                desc:'The platform regularly collaborates with public welfare organizations to provide free legal aid to low-income or economically disadvantaged groups.</br>Enter the“Public Interest Law”section,register,and submit proof of family income or poverty.</br>After approval,you can book a Pro Bono lawyer for a 30-minute free consultation.<br/>Some assistance projects are subsidized.'
            },
            {
                title: 'Is there a limit to the number of Pro Bono services?',
                desc:'Each user can enjoy 1 Pro Bono consultation within a year.<br/>If you need more services,you can choose to pay for consultations.'
            },
        ]
    }
])
</script>


<style scoped>
::v-deep .el-collapse-item__header {
    border: none;
}

::v-deep .el-collapse {
    border: none;
}
::v-deep .el-collapse-item__wrap {
    border: none;
    
}

::v-deep .el-collapse-item__content {
    padding-bottom: 10px;
}

</style>
