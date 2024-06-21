const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://01fe21bcs180:Sonikanti%402003@database.lvyvjl3.mongodb.net/SE', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.connect('mongodb://localhost:27017/khushi', {
  mongoose.connect('mongodb://localhost:27017/SEWT', {
  
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongodb://localhost:27017/

const formDataSchema = new mongoose.Schema({
  addictname: String,
  original_pname:String,
  maritalStatus: String,
  occupation: String,
  age: Number,
  dob: String,
  dateOfIntake: String,
  bpl: String,
  yearOfDrinking: Number,
  yearOfExcessiveDrinking: Number,
  presentPatternOfDrinking: String,
  useOfOtherDrugs: String,
  psychiatricProblem: String,
  denial: String,
  physicalProblems: String,
  priorTreatment: String,
  use_of_other_drugs: String,
  motivatingFactor: String,

  issue1: String,
  issue2: String,
  issue3: String,
  issue4: String,
  impression: String,
  actionTaken: String,
  address: String,
  mobNo1: {
    number: Number,
    name: String,
    relation: String
  },
  mobNo2: {
    number: Number,
    name: String,
    relation: String
  },
  mobNo3: {
    number: Number,
    name: String,
    relation: String
  },
  landlineNo1: {
    number: Number,
    name: String,
    relation: String
  },
  remarks: String,

  ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: String,
  ಪಾಲ್ಗೊಳ್ಳಲುದಿನಾಂಕ: String,
  ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು1: String,
  ದಾಖಲುಪಡಿಸಿದವರಹೆಸರು: String,
  ಮೊಬೈಲ: Number,
  
  ಹೆಸರು: String,
  ನಿವಾಸ: String,
  age: String,
  place: String,
  ಸಾಕ್ಷಿದಾರ1: String,
  ನಿವಾಸ1: String,
  ಸಾಕ್ಷಿದಾರ2: String,
  ನಿವಾಸ2: String,
  name1: String,
  age1: String,
  place1: String,
  name2: String,
  age2: String,
  place2: String,

  SpecialNoteವಿಶೇಷಸೂಚನೆ:String,
  name:String,
  MobileNo:Number,
  ದಿನ:Number,
  ತಿಂಗಳು:String,
  ವರ್ಷ:Number,
  Date:Number,
  Month:String,
  Year: Number,
  attenderName1:String,
  attenderName2:String,
  date:Number,
  MonthYear:String,
  sig1:String,
  sig2:String,
  sig3:String,
  sig4:String,
  sig5:String,

  ಚಿಕಿತ್ಸಾರ್ಥಿಯಸಹಿ:String,
  signature1: String,
  signature2: String,
  PhysicalComplications:String,

  signature71: String,
  signature72: String,

  signature21: String,

  signature31:String,
  signature32:String,
  photo:String,

  //-----------------------------------------------------------------------------------------
  name_8: String,
  age_8: String,
  dor_8: String,
  age1_8: String,
  you1_8: String,
  yoeu1_8: String,
  stod1_8: String,
  roas1_8: String,
  foui1_8: String,
  qui1_8: String,
  puai1_8: String,
  age2_8:String,
  you2_8:String,
  yoeu2_8:String,
  stod2_8:String,
  roas2_8:String,
  foui2_8:String,
  qui2_8:String,
  puai2_8:String,
  age3_8:String,
  you3_8:String,
  yoeu3_8:String,
  stod3_8:String,
  roas3_8:String,
  foui3_8:String,
  qui3_8:String,
  puai3_8:String,
  age4_8:String,
  you4_8:String,
  yoeu4_8:String,
  stod4_8:String,
  roas4_8:String,
  foui4_8:String,
  qui4_8:String,
  puai4_8:String,
  age5_8:String,
  you5_8:String,
  yoeu5_8:String,
  stod5_8:String,
  roas5_8:String,
  foui5_8:String,
  qui5_8:String,
  puai5_8:String,
  age6_8:String,
  you6_8:String,
  yoeu6_8:String,
  stod6_8:String,
  roas6_8:String,
  foui6_8:String,
  qui6_8:String,
  puai6_8:String,
  age7_8:String,
  you7_8:String,
  yoeu7_8:String,
  stod7_8:String,
  roas7_8:String,
  foui7_8:String,
  qui7_8:String,
  puai7_8:String,



  name_9: String,
  trem_9:String,
  inso_9:String,
  fits_9:String,
  ache_9:String,
  hallu_9:String,
  delli_9:String,
  drugtremor_9:String,
  druginsomnia_9:String,
  drugdiarrhoea_9:String,
  drugseverepain_9:String,
  drugrestless_9:String,
  knowledge_9:String,
  depress_9: String,
  sucid_9: String,
  confu_9:String,
  aggres_9: String,
  halluc_9: String,
  para_9:String,
  depress1_9:String,
  sucid1_9:String,
  confu1_9: String,
  aggres1_9: String,
  halluc1_9:String,
  para1_9: String,
  uotp_9:String,




   pulse_10: String,
    bloodp_10: String,
    temp_10: String,
    weight_10: String,
    anemia_10: String,
    jaundice_10: String,
    malnu_10: String,
    lymph_10: String,
    lobh_10: String,
    con_10: String,
    glossi_10: String,
    wom_10: String,
    naevi_10: String,
    flushedface_10: String,
    abscess_10: String,
    gynae_10: String,
    palery_10: String,
    hallu_10: String,
    injection_10: String,
    pedal_10: String,
    tremors_10: String,
    Respiratory1_10: String,
    Respiratory2_10: String,
    cardio1_10: String,
    cardio2_10: String,
    gastro1_10: String,
    gastro2_10: String,
    nervous1_10: String,
    nervous2_10: String,
    incidento_10: String,
    dincident_10: String,
    action_10: String,
    ioc_10: String,
    Investigation_10: String,
    Certificate_10: String,
     denial_type_10: String,

     date1_11:  String,
     Complaint1_11:  String,
     Medication1_11:  String,
     Signature1_11:  String,
     date2_11: String,
     Complaint2_11: String,
     Medication2_11: String,
     Signature2_11:  String,
     date3_11: String,
     Complaint3_11:  String,
     Medication3_11:  String,
     Signature3_11: String,
     date4_11: String,
     Complaint4_11:  String,
     Medication4_11:  String,
     Signature4_11:  String,
     date5_11: String,
     Complaint5_11: String,
     Medication5_11:  String,
     Signature5_11:  String,
     date6_11:  String,
     Complaint6_11: String,
     Medication6_11: String,
     Signature6_11:  String,
     date7_11:  String,
     Complaint7_11: String,
     Medication7_11:  String,
     Signature7_11:  String,
     date8_11:  String,
     Complaint8_11: String,
     Medication8_11: String,
     Signature8_11:  String,
     date9_11:  String,
     Complaint9_11:  String,
     Medication9_11: String,
     Signature9_11:  String,
     date10_11: String,
     Complaint10_11:  String,
     Medication10_11: String,
     Signature10_11:  String,
     date11_11: String,
     Complaint11_11: String,
     Medication11_11:  String,
     Signature11_11:  String,

     name_12:String,
     age_12 : String,
     dateofad_12 :String,
     hist_12 :String,
     Physical_12 :String,
     past_hist_12 : String,
     psyc_prob_12 :String,
     withdrawal_symp_12 : String,
     treat_12: String,
    

     date_13:String,
     complaint_13:String,
     medication_13: String,
     sign_13: String,
     date1_13:String,
     complaint1_13:String,
     medication1_13: String,
     sign1_13:String,
     date2_13:String,
     complaint2_13: String,
     medication2_13:String,
     sign2_13:String,
     date3_13:String,
     complaint3_13:String,
     medication3_13:String,
     sign3_13: String,
     date4_13: String,
     complaint4_13:String,
     medication4_13: String,
     sign4_13:String,
     date5_13:String,
     complaint5_13: String,
     medication5_13:String,
     sign5_13:String,
     date6_13:String,
     complaint6_13:String,
     medication6_13: String,
     sign6_13: String,
     date7_13:String,
     complaint7_13: String,
     medication7_13:String,
     sign7_13: String,
     date8_13: String,
     complaint8_13:String,
     medication8_13: String,
     sign8_13:String,
     date9_13: String,
     complaint9_13:String,
     medication9_13:String,
     sign9_13: String,
   name_14:String,
reg_14:String,
bpdetail1_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail2_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail3_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail4_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail5_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail6_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail7_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail8_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail9_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
bpdetail10_14: {
  date_14: String,
  time_14: String,
  years_14: Number,
  bp_14: Number,
  pulse_14: Number,
  weight_14: Number,
  temp_14: Number,
  sign_14: String
},
name_15:String,
reg_15:String,
//------------------------
bpdetail1_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail2_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail3_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail4_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail5_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail6_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail7_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail8_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail9_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
bpdetail10_15: {
date_15: String,
time_15: String,
years_15: Number,
bp_15: Number,
pulse_15: Number,
weight_15: Number,
temp_15: Number,
sign_15: String
},
name_19:String,
age_19:Number,
regid_19:String,
reddetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
orangedetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
yellowdetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
greendetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
bluedetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
antidiabeticdetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
medidetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
insulindetail_19:{
date1_19:String,
date2_19:String,
date3_19:String,
date4_19:String,
date5_19:String,
date6_19:String,
date7_19:String
},
tempdatedetail_19:{
tdate1_19:String,
tdate2_19:String,
tdate3_19:String,
tdate4_19:String
},
fdetail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f107detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f106detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f105detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f104detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f103detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f102detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f101detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f100detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f99detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f98detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
f97detail_19:{
f1_19:String,
f2_19:String,
f3_19:String,
f4_19:String
},
pulse_19:{
p1_19:[0],
p2_19:[0],
p3_19:[0],
p4_19:[0]
},
bp_19:{
bp1_19:[0],
bp2_19:[0],
bp3_19:[0],
bp4_19:[0]
},
    // --------------------------------------------------------------------
  detail1_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail2_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail3_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail4_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail5_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail6_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail7_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail8_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail9_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  detail10_21: {
    name_21: String,
    relation_21: String,
    age_21: Number,
    income_21: Number,
    education_21: String,
    intoxicants_21: String
  },
  mother_death_reason: String,
  father_death_reason: String,
  father_death_age: Number,
  mother_death_age: Number,
  mtongue_21: String,
  knownLang: String,
  denial_type: String,
  causefactor_22:String,
  tolerence_22:String,
  blackout_22:String,

  behaviour1_22:String,
  behaviour2_22:String,
  behaviour3_22:String,
  behaviour4_22:String,
  behaviour5_22:String,
  behaviour6_22:String,

  childhood_22:String,
  exp15_1:String,
  exp15_2:String,
  exp15_3:String,
  exp15_4:String,
  exp15_5:String,
  exp15_6:String,
  exp15_7:String,
  exp15_8:String,

  years_23:Number,
  prob15_1:String,
  prob15_2:String,
  prob15_3:String,
  prob15_4:String,
  prob15_5:String,
  prob15_6:String,
  prob15_7:String,
  prob15_8:String,

  pastAch_1:String,
  pastAch_2:String,
  name_23:String,
  age_23:Number,
  religion_23:String,
  education_23:String,
  occupation_23:String,
  income_23:String,
  myears_23:Number,
  marriageType:String,

  acceptedByFamily_24:String,
  previousMarriages_24:String,
  separatedDueToAddiction_24:String,
  suspiciousOfWife_24:String,
  familyViolence_24:String,
  verbalabuse_24:String,
  neighbourviolence_24:String,
  articlebreak_24:String,
  maleChildrenCount:Number,
  femaleChildrenCount:Number,
  
health1_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health2_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health3_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health4_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health5_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
health6_24: {
  pschoice_24:String,
  psrelation_24:String,
  wcchoice_24:String,
  wcrelation_24:String
},
relation1_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation2_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation3_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation4_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation5_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
relation6_25: {
  parent_25:String,
  sibling_25:String,
  spouse_25:String,
  child_25:String
},
damagetype_25:String,
extramarital_25:String,
age_25:Number,
sustrel_25:String,
years_25:Number,

livarr_26:String,
child_26:String,
highrisk_26:String,
sx_26:String,
q24_26:String,
hivtest_26:String,
prob26_1:String,
prob26_2:String,
prob26_3:String,
prob26_4:String,
prob26_5:String,
homewithdrawn_26:String,
homereactimmediately_26:String,
homethinkandact_26:String,
homeneverreact_26:String,
societywithdrawn_26:String,
societyreactimmediately_26:String,
societythinkandact_26:String,
societyneverreact_26:String,
work_year_26:Number,


regno_20:String,
    name_20:String,
    sex_20:String,
    age_20:String,
    dob_20:String,
    religion_20:String,
    community_20:String,
    eduquali_20:String,
    occupation_20:String,
    marital_status_20:String,
    income:String,
    living_arrange_20:String,
    familymem_20:String,
    tele_20:String,
    year_20:String,
    place_treat_20:String,
    day_sobriety_20:String,
    year1_20:String,
    place_treat1_20:String,
    day_sobriety1_20:String,
    year2_20:String,
    place_treat2_20:String,
    day_sobriety2_20:String,


    work_27:String,
    award_27:String,
    job_addict_27:String,
    unemployment_27:String,
    yes_no_27:String,
    yes_no1_27:String,
    yes_no2_27:String,
    yes_no3_27:String,
    yes_no4_27:String,
    yes_no5_27:String,
    yes_no6_27:String,
    yes_no7_27:String,
    money_fam_27:String,
    loan_bank_27:String,
    loan_work_27:String,
    money_lender_27:String,
    money_article_27:String,
    out_debt_27:String,
    none_27:String,
    time_27:String,
    time1_27:String,
    drugs_27:String,
    drugs1_27:String,
    time2_27:String,
    time3_27:String,
    cwork_27:String,
    mild_27:String,
    mild1_27:String,
    
    law_28:String,
    law1_28:String,
    other_28:String,
    game_28:String,
    game1_28:String,
    exercise_28:String,
    exercise1_28:String,
    movie_28:String,
    movie1_28:String,
    tv_28:String,
    tv1_28:String,
    reading_28:String,
    reading1_28:String,
    frds_28:String,
    frds1_28:String,
    hobby_28:String,
    hobby1_28:String,
    belief_28:String,
    temple1_28:String,
    pilgrimage1_28:String,
    festival1_28:String,




    visit_29:String,
    referral_29:String,
    action_29:String,
    name_org_29:String,
    Abstaining_29:String,
    Abstaining1_29:String,
    rout_life_29:String,
    rout_life1_29:String,
    improve_29:String,
    improve1_29:String,
    finances_29:String,
    finances1_29:String,
    defect_29:String,
    defect1_29:String,
    recreation_29:String,
    recreation1_29:String,
    measures_29:String,
    measures1_29:String,
    relapse_29:String,
    relapse1_29:String,
    date_drop_29:String,
    lackofmotivation_29:String,
    familysupport_29:String,
    poverty_29:String,
    legalproblem_29:String,
    unabletocope_29:String,
    inadequatefacilities_29:String,
    anyother_29:String,
    extn_29:String,
    reason_29:String,

});

const FormDataModel = mongoose.model('formData', formDataSchema);

let isSaving = false;

app.post('/api/saveFormData/:addictName', async (req, res) => {
  try {
    while (isSaving) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    isSaving = true;

    const formData = req.body;
    const componentName = formData.component;
    const addictName = req.params.addictName;

    let formDataModel;

    formDataModel = await FormDataModel.findOne({ addictname: addictName });
  // ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: 
  //formData.ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು

    if (!formDataModel) {
      console.log("formdata null");
      formDataModel = new FormDataModel(formData);
      await formDataModel.save();
    } else {
      for (const key in formData) {
        if (formData[key] !== null && formData[key] !== undefined) {
          formDataModel[key] = formData[key];
        }
      }
    }

    await formDataModel.save();
    res.json({ success: true, data: formDataModel });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    isSaving = false;
  }
});


app.get('/api/getFormData/:addictName', async (req, res) => {
  try {
    const addictName = req.params.addictName;

    // Perform a query to retrieve data based on the addictName
    const formData = await FormDataModel.findOne({ addictname: addictName });

    if (!formData) {
      res.status(404).json({ success: false, error: 'Addict not found' });
      return;
    }

    res.json({ success: true, data: formData });
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/api/getAllAddictDetails', async (req, res) => {
  try {
    
    
    // Perform a query to retrieve all data
    const allFormData = await FormDataModel.find();

    if (!allFormData || allFormData.length === 0) {
      res.status(404).json({ success: false, error: 'Data not found' });
      return;
    }

    // Extracting addict details from the retrieved data
    const allAddictDetails = allFormData.map(formData => {
      return {
        addictName: formData.addictname,
        patientName: formData.original_pname, // Assuming pat_name is a field in your schema
        photo: formData.photo // Assuming photo is a field in your schema
        
      };
    });
    

    res.json({ success: true, data: allAddictDetails });
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

const flattenSchema = (schema, parentKey = '') => {
  let flattened = {};
  for (const key in schema.paths) {
    const fullPath = parentKey ? `${parentKey}.${key}` : key;
    
    if (schema.paths[key].schema) {
      // Check for specific nested schema
      if (schema.paths[key].schema.paths) {
        const nestedKeys = Object.keys(schema.paths[key].schema.paths);
        nestedKeys.forEach(nestedKey => {
          const nestedFullPath = `${fullPath}.${nestedKey}`;
          flattened[nestedFullPath] = schema.paths[key].schema.paths[nestedKey].instance;
        });
      } else {
        flattened = { ...flattened, ...flattenSchema(schema.paths[key].schema, fullPath) };
      }
    } else {
      flattened[fullPath] = schema.paths[key].instance;
    }
  }
  return flattened;
};

app.get('/api/downloadCsv', async (req, res) => {
  try {
    
    // Perform a query to retrieve all data
    const allFormData = await FormDataModel.find();
    console.log("downloading");

    if (!allFormData || allFormData.length === 0) {
      res.status(404).json({ success: false, error: 'Data not found' });
      return;
    }


    const flattenedSchema = flattenSchema(formDataSchema);

    // Get column headers
    const keys = Object.keys(flattenedSchema);

    // Create CSV writer
    const csvWriter = createCsvWriter({
      path: 'formData.csv',
      header: keys.map((key) => ({ id: key, title: key })),
    });

    // Write data to the CSV file
    await csvWriter.writeRecords(allFormData.map((data) => flattenData(data._doc, flattenedSchema)));

    
    res.json({ success: true, data: {y:"car"} });
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

const flattenData = (data, flattenedSchema) => {
  let flattenedData = {};
  for (const key in flattenedSchema) {
    const nestedKeys = key.split('.');
    let nestedData = data;
    for (const nestedKey of nestedKeys) {
      if (nestedData && nestedData[nestedKey] !== undefined) {
        nestedData = nestedData[nestedKey];
      } else {
        nestedData = undefined;
        break;
      }
    }
    flattenedData[key] = nestedData;
  }
  return flattenedData;
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/*
const express = require('express');
const mongoose = require('mongoose');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async function () {
  // Define your MongoDB model/schema
  const FormDataModel = mongoose.model('FormData', formDataSchema);

  try {
    // Fetch all data from MongoDB
    const allFormData = await FormDataModel.find();

    if (!allFormData || allFormData.length === 0) {
      console.log('No data found in MongoDB');
      mongoose.disconnect();
      return;
    }

    // Define CSV writer
    const csvWriter = createCsvWriter({
      path: 'path/to/your/output/file.csv',
      header: Object.keys(allFormData[0]).map((key) => ({ id: key, title: key })),
    });

    // Write data to the CSV file
    await csvWriter.writeRecords(allFormData);

    console.log('CSV file was written successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error fetching or writing data:', error);
    mongoose.disconnect();
  }
});

// Serve the CSV file for download
app.get('/download', (req, res) => {
  const file = 'path/to/your/output/file.csv';
  res.download(file, 'formData.csv', (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/

