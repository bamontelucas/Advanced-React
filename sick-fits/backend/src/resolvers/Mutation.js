const Mutations = {
    async createItem(parent, args, ctx, info) {
        const input = { data: { ...args } };
        const item = await ctx.db.mutation.createItem(input, info);

        return item;
    }
};

module.exports = Mutations;
