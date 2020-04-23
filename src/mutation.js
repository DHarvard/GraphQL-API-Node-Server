import { idArg, mutationType, stringArg} from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.crud.deleteOneRecipe()
        
        t.field('createRecipe', {
            type: 'Recipe',
            args: {
                title: stringArg({ nullable: false }),
                instructions: stringArg(),
                ingredients: stringArg(),
                imageUrl: stringArg(),
            },
            resolve: (parent, { name, instructions, ingredients, imageUrl }, ctx) => {
                return ctx.prisma.recipe.create({
                    data: {
                        name,
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
                name: stringArg(),
                instructions: stringArg(),
                ingredients: stringArg(),
                imageUrl: stringArg(),
            },
            resolve: (parent, { id, name, instructions, ingredients, imageUrl }, ctx) => {
                return ctx.prisma.recipe.update({
                    where: {
                        id
                    },
                    data: {
                        name,
                        instructions,
                        ingredients,
                        imageUrl,
                    }
                })
            }
        })
    }
})