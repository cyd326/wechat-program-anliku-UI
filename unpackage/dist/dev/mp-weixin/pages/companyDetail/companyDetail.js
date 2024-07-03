"use strict";
const components_detail_list = require("../../components/detail_list.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      item: components_detail_list.companyList[0]
      // Initialize with the first item or adjust as needed
    };
  },
  onLoad(options) {
    if (options.itemIndex) {
      this.item = components_detail_list.companyList[options.itemIndex];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.item.image,
    b: common_vendor.t($data.item.companyName),
    c: common_vendor.t($data.item.userName),
    d: common_vendor.t($data.item.position),
    e: common_vendor.t($data.item.description),
    f: common_vendor.t($data.item.studentBackground),
    g: common_vendor.t($data.item.recruitmentInfo)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/cyd30/Documents/HBuilderProjects/wechat_program-mianjing-front/pages/companyDetail/companyDetail.vue"]]);
wx.createPage(MiniProgramPage);
