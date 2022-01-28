'use strict';

/**
 *  person controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const uuid = require('uuid/v4');
const crypto = require('crypto');

module.exports = createCoreController('api::person.person', ({ strapi }) => ({
  async create(ctx) {
    ctx.request.body.data.uid = crypto.createHash('sha1').update(uuid()).digest('hex');

    const { data } = await super.create(ctx);

    return data;
  },
  async update(ctx) {
    const { data } = await super.update(ctx);

    return data;
  },
  async find(ctx) {
    ctx.query = { ...ctx.query, local: 'en' }

    const { data } = await super.find(ctx);

    return data;
  },
  async findOne(ctx) {
    ctx.query = { ...ctx.query, local: 'en' }

    const { data } = await super.findOne(ctx);

    return data;
  }
}));
