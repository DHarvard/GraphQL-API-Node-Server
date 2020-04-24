import { idArg, queryType, stringArg } from 'nexus'

export const Query = queryType({
  definition(t) {
    t.field('Recipe', {
      type: 'Recipe',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.recipe.findOne({
          where: {
            id,
          },
        })
      }
    })

    t.list.field('Recipes', {
      type: 'Recipe',
      args: {
        searchString: stringArg({ nullable: true}),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.recipe.findMany({
          where: {
            OR: [
              { title: { contains: searchString }},
            ],
          },
        })
      }
    })

    t.field('simpleRecipe', {
      type: 'simpleRecipe',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.simpleRecipe.findOne({
          where: {
            id,
          },
        })
      }
    })

    t.list.field('simpleRecipes', {
      type: 'simpleRecipe',
      args: {
        searchString: stringArg({ nullable: true}),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.simpleRecipe.findMany({
          where: {
            OR: [
              { title: { contains: searchString }},
            ],
          },
        })
      }
    })

  }
})