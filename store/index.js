import {
  personalInfo,
  socialLinks,
  contacts as defaultContacts,
  awards as defaultAwards,
  projects as defaultProjects,
  technicalSkills as defaultSkills,
} from '../config/profile';

let awwwwardsDefaultLength = 0;
let cssdesignawardsDefaultLength = 0;
let csswinnerDefaultLength = 0;

defaultAwards.forEach((v) => {
  if (v.group === 'AWWWARDS') {
    awwwwardsDefaultLength++;
  } else if (v.group === 'CSS DESIGN AWARDS') {
    cssdesignawardsDefaultLength++;
  } else if (v.group === 'CSS WINNER') {
    csswinnerDefaultLength++;
  }
});

export const state = () => ({
  projectData: defaultProjects,
  contactData: defaultContacts,
  pickupData: defaultProjects.filter((v) => v.pickup && v.pickup.pickupFlag),
  awardData: defaultAwards,
  awardDataLength: {
    awwwwardsTotalLength: awwwwardsDefaultLength,
    cssdesignawardsTotalLength: cssdesignawardsDefaultLength,
    csswinnerTotalLength: csswinnerDefaultLength,
  },
  personalInfo,
  socialLinks,
  technicalSkills: defaultSkills,
});

export const actions = {};

export const mutations = {
  getProjectData(state, data) {
    state.projectData = data;
  },
  getContactData(state, data) {
    state.contactData = data;
  },
  getPickupData(state, data) {
    state.pickupData = data;
  },
  getAwardData(state, data) {
    state.awardData = data;
  },
  getAwardDataLength(state, data) {
    state.awardDataLength = data;
  },
};

export const getters = {
  projectData(state) {
    return state.projectData;
  },
  contactData(state) {
    return state.contactData;
  },
  pickupData(state) {
    return state.pickupData;
  },
  awardData(state) {
    return state.awardData;
  },
  awardDataLength(state) {
    return state.awardDataLength;
  },
  personalInfo(state) {
    return state.personalInfo;
  },
  socialLinks(state) {
    return state.socialLinks;
  },
  technicalSkills(state) {
    return state.technicalSkills;
  },
};
