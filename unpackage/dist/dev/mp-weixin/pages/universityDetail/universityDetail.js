"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      item: {
        image: "/static/images/university_logo.png",
        // Replace with actual data
        title: "研究生院校名称研究生院校名称",
        universityName: "研究生院校名称",
        userName: "某某某",
        undergraduateUniversity: "某某某大学",
        undergraduateMajor: "计算机科学",
        gpa: "XXX",
        languageScore: "XXX",
        greGmat: "XXX",
        softSkillsBackground: "具备跨文化沟通能力，适应多元文化环境，有效与国际同学和教授交流。同时，拥有出色的团队协作能力，参与多个项目。"
      }
    };
  },
  onLoad(options) {
    if (options.item) {
      this.item = JSON.parse(decodeURIComponent(options.item));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.item.image,
    b: common_vendor.t($data.item.title),
    c: common_vendor.t($data.item.universityName),
    d: common_vendor.t($data.item.userName),
    e: common_vendor.t($data.item.undergraduateUniversity),
    f: common_vendor.t($data.item.undergraduateMajor),
    g: common_vendor.t($data.item.gpa),
    h: common_vendor.t($data.item.languageScore),
    i: common_vendor.t($data.item.greGmat),
    j: common_vendor.t($data.item.softSkillsBackground)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/cyd30/Documents/HBuilderProjects/wechat_program-mianjing-front/pages/universityDetail/universityDetail.vue"]]);
wx.createPage(MiniProgramPage);
