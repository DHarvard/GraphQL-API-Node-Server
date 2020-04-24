import { idArg, mutationType, stringArg} from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.crud.deleteOneRecipe()
        t.crud.createOneRecipe()
        t.crud.updateOneRecipe()
        
        /* t.field('createRecipe', {
            type: 'Recipe',
            args: {
                title: stringArg({ nullable: false }),
                instructions: stringArg(),
                ingredients: stringArg(),
                imageUrl: stringArg(),
            },
            resolve: (parent, { title, instructions, ingredients, imageUrl }, ctx) => {
                return ctx.prisma.recipe.create({
                    data: {
                        title,
                        instructions,
                        ingredients,
                        imageUrl,
                    }
                })
            }
        })

        t.field('updateRecipe', {
            type: 'Recipe',
            args: { id: idArg(),
                title: stringArg(),
                instructions: stringArg(),
                ingredients: stringArg(),
                imageUrl: stringArg(),
            },
            resolve: (parent, { id, title, instructions, ingredients, imageUrl }, ctx) => {
                return ctx.prisma.recipe.update({
                    where: {
                        id
                    },
                    data: {
                        title,
                        instructions,
                        ingredients,
                        imageUrl,
                    }
                })
            }
        }) */
    }
})