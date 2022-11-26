// USERS
export const LOGIN = '/users/login';
export const REGISTER_URL = '/api/users/customerRegister';
export const OLD_REGISTER_URL = '/api/users/register';
export const EMAIL_CONFIRM = '/api/users/confirmemail';
export const VERIFY_EMAIL = '/api/users/verifyEmail';
export const UPDATE_ROLE = '/api/users/updateUserRole';
export const LOGIN_URL = '/api/users/login';
export const SCREEN_NAME = '/api/users/screenname';
export const REMOVE_PROFILE_PICTURE = '/api/users/removepic';
export const FORGOT_PASSWORD = '/api/users/forgotpassword';
export const FREELANCERS = '/api/users/freelancers';
export const CHECK_EMAIL = '/api/users/checkemail';
export const SEARCH_FREELANCER = '/api/users/searchfreelancer';
export const SEARCH_ADMIN = '/api/users/searchadmin';
export const FILTER_ADMIN = '/api/users/filteradmin';
export const PROFILE_PIC_STATUS = '/api/users/profilepicstatus';
export const BIO_STATUS = '/api/users/biostatus';
export const UPLOAD_ID = '/api/users/uploadid';
export const USERS_UPLOAD = '/api/users/upload';
export const UPLOAD_ADDRESS = '/api/users/uploadaddress';
export const MOBILE_CODE = '/api/users/mobilecode';
export const MOBILE_VERIFY = '/api/users/mobileverify';
export const MOBILE_STATUS = '/api/users/mobilestatus';
export const REMOVE_JOB_DESCRIPTION = '/api/users/removeJobDescription';
export const UPLOAD_JOB_ATTACHMENT = '/api/users/uploadJobAttachment';
export const UPDATE_JOB_DESCRIPTION = '/api/users/updateJobDescription';
export const RESUME_UPLOAD = '/api/users/resumeUpload';
export const REMOVE_PORTFOLIO = '/api/users/removePortfolio';
export const UPLOAD_PORTFOLIO = '/api/users/uploadPortfolio';
export const UPDATE_PORTFOLIO = '/api/users/updatePortfolio';
export const ACTIVATE_USER = '/api/users/activate';
export const BASE64_IMAGE = '/api/users/base64image';
export const DEACTIVE_USER = '/api/users/deactivate';
export const RESET_PASSWORD = '/api/users/resetpassword';
export const UPDATE_INHOUSE = '/api/users/updateInHouse';
export const USER_DETAILS = '/api/users/userdetails';
export const UPDATE_PROFILE = '/api/users/updateProfile';
export const ADMIN_USERS = '/api/users/adminusers';
export const UPDATE_JOB_DESCRIPTION_FOR_SM = '/api/users/updateIsJobDescriptionForSM';
export const REMOVE_PORTFOLIO_BY_SM = '/api/users/removePortfolioBySM';
export const APPROVE_PORTFOLIO_BY_SM = '/api/users/approvePortfolioBySM';
export const PHOTO_ID_STATUS = '/api/users/photoidstatus';
export const ADDRESS_PROOF_STATUS = '/api/users/addressproofstatus';
export const UPDATE_IN_XERO = '/api/users/updateInXero';
export const TEST_INVITE = '/api/userAssessment/inviteTestCandidate';
export const INVITE_EMAIL = '/api/userAssessment/sendRetestEmail';
export const REATTEMPT_INVITE = '/api/userAssessment/reattemptInviteCandidate';
export const ALL_STATUS = '/api/customers/getAllStatus';
export const PARTNER_DETAILS = '/api/partners/getAllPartner';
export const CREATE_RESOURCE = '/api/resource/createresource';
export const QUALIFY_AND_PICKUP = '/api/customers/qualifyAndPickUp';

// QA
export const QA_BY_RECRUITER_ID = '/api/qa/GetQAByRecruiterId';
export const UPDATE_MULTIPLE_CHOICE = '/api/multipleqa/UpdateMultipleChoice';
export const QUESTIONS_BY_SKILL = '/api/qa/GetQABySkill';
export const ADD_QA = '/api/qa/PostQA';
export const ADD_MULTIPLE_CHOICE = '/api/multipleqa/MultipleChoice';
export const UPDATE_QA = '/api/qa/updateQA';
export const GET_QA = `/api/qa/GetQA`;

// CATEGORIES
export const CATEGORY_LIST = '/api/categories/categorylist?isActive=true';
export const REMOVE_SKILLS = '/api/categories/removeSkills';
export const CATEGORY_DEACTIVATE = '/api/categories/deactivatecategory';
export const MANDATORY_CATEGORY = '/api/categories/mandatorycategory';
export const TOGGLE_SKILL_TO_APPROVE = '/api/skillstoapprove/toggleskill';
export const CATEGORIES = '/api/categories/categories';
export const FULL_CATEGORY_LIST = '/api/categories/categorylist';
export const MANDATORY_CATEGORY_LIST = '/api/categories/mandatorycategorylist';
export const GET_SERVICE_CATEGORIES = '/api/customers/getServiceCategories';
export const UPDATE_CATEGORY = '/api/categories/updateCategory';

// CUSTOMERS
export const FILTER_CUSTOMERS = '/api/customers/filtercustomers';
export const CUSTOMERS_STATUS = '/api/customers/status';
export const UPDATE_CUSTOMERS_STATUS = `/api/customers/updatestatus`;
export const UPDATE_CUSTOMER_PROFILE = '/api/customers/updateCustomerProfile';

// MESSAGES
export const MESSAGE_CONTENT = '/api/messages/messageContent';

// COMMENTS
export const ALL_COMMENTS = '/api/comments/allcomments';
export const REPLY_COMMENTS = '/api/comments/replycomments';
export const ADD_COMMENT = '/api/comments/addComment';
export const COMMENTS_UPLOAD = '/api/comments/upload';

// PURCHASE ORDERS
export const PO_FOR_FREELANCER = '/api/purchaseOrder/getPurchaseOrderForFreelancer';
export const ALL_PO = `/api/purchaseOrder/getAllPurchaseOrder`;

// JIRA
export const JIRA_CARDS = `/api/jira/getJiraCards`;

// SERVICES
export const SERVICE_REQUEST_FOR_SM = '/api/customers/serviceRequestForSM';
export const SERVICE_REQUESTS_VIA_CLIENT = `/api/customers/getAllServiceRequestsViaClient`;
export const UPDATE_SERVICE_REQUEST = `/api/customers/updateServiceRequest`;
export const ADD_SERVICE_PRODUCT = '/api/serviceProduct/addServiceProduct';
export const CUSTOMER_SERVICE_REQUEST_HISTORY = '/api/customers/customerServiceRequestHistory';
export const ADD_SERVICE_CATEGORY = '/api/customers/serviceCategory';
export const UPDATE_SERVICE_CATEGORY = `/api/customers/updateServiceCategory`;
export const SERVICE_REQUEST_HISTORY = '/api/customers/serviceRequestHistory';
export const SERVICE_PRODUCTS = `/api/serviceProduct/getAllSeriveProduct`;
export const UPDATE_SERVICE_REQUEST_BY_SM = '/api/customers/updateServiceRequestBySM';
export const ACTIVATE_SERVICE = '/api/serviceProduct/serviceActivate';
export const SERVICE_PRODUCT_UPLOAD = '/api/serviceProduct/upload';
export const DEACTIVATE_SERVICE = '/api/serviceProduct/deactivateService';

// CERTIFICATION
export const ADD_CERTIFICATION = '/api/certifications/addcertification';
export const CERTIFICATION_STATUS = '/api/certifications/certificationStatus';
export const USER_CERTIFICATION_STATUS = '/api/users/certificationstatus';

// BIDS
export const BIDS_UPLOAD = '/api/bids/upload';
export const CREATE_BID = '/api/bids/createbid';
export const BID_DETAILS = '/api/bids/biddetails';
export const BID_PROPOSAL_DETAILS = '/api/bidproposals/bidproposaldetails';
export const SM_BIDS = '/api/bids/smbids';
export const BIDS = '/api/bids/bids';
export const CREATE_BID_PROPOSAL = '/api/bidproposals/createbidproposal';
export const UPDATE_OTHER_BIDS = '/api/bids/updateotherbids';
export const UPDATE_BID_PARTICIPANTS = '/api/bids/updatebidparticipants';
export const BID_PROPOSAL_UPLOAD = '/api/bidproposals/upload';
export const FREELANCER_BIDS = '/api/bids/freelancerbids';
export const SEARCH_BIDS = '/api/bids/searchbids';
export const STATUS_FILTER_BIDS = '/api/bids/statusfilterbids';
export const BID_PROPOSALS = '/api/bidproposals/bidproposals';
export const ASSIGN_TO = '/api/bids/assignto';
export const UPDATE_BID = '/api/bids/updatebid';
export const CERTIFICATION_LIST = '/api/certifications/certificationlist';
export const ALL_ASSESSMENT_TESTS = '/api/userAssessment/getAllTest';

// SKILLS
export const CREATE_SKILL = '/api/skillstoapprove/createskill';
export const GET_SKILLS = '/api/categories/getskills';
export const ADD_SKILLS = '/api/categories/addskills';
export const SKILLS_TO_APPROVE = '/api/skillstoapprove/skillstoapprovelist';
export const UPDATE_SKILLS = '/api/skills/updateskills';
export const VERIFY_SKILLS = '/api/users/verifyskills';
export const UPDATE_USER_SKILLS = '/api/users/updateskills';
