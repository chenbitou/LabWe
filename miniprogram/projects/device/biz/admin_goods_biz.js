/**
 * Notes: 商品后台管理模块业务逻辑
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2025-12-05 07:48:00 
 */

const BaseBiz = require('../../../comm/biz/base_biz.js');
const GoodsBiz = require('./goods_biz.js');
const projectSetting = require('../public/project_setting.js');

class AdminGoodsBiz extends BaseBiz {

	static initFormData(id = '') {

		return {
			id, 

			fields: projectSetting.GOODS_FIELDS,

			formTitle: '',
			formCateId: '',
			formOrder: 9999, 
			formForms: [],
		}

	}

}

AdminGoodsBiz.CHECK_FORM = {
	title: 'formTitle|must|string|min:2|max:100|name=标题',
	cateId: 'formCateId|must|id|name=分类',
	order: 'formOrder|must|int|min:0|max:9999|name=排序号',
	forms: 'formForms|array',
};


module.exports = AdminGoodsBiz;