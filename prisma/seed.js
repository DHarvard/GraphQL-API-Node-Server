import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const recipes = fs.readFileSync('prisma/data/recipes.json')

/* function loadRecipes() {
    const data = JSON.parse(recipes)
    const allRecipes = data.data

    return allRecipes.map(recipe => {
        return {
            data: {
                title: recipe.name,
                instructions: recipe.steps[1],
                ingredients: recipe.ingredients[1].name,
                imageUrl: recipe.imageURL
            },
        }
    })
} */

function loadRecipes() {
    const data = JSON.parse(recipes)
    const allRecipes = data.data

    return allRecipes.map(recipe => {
        const instructions = []
        const ingredients = []

        for (let i = 0; i < recipe.steps.length; i++) {
            instructions.push(recipe.steps[i])
        }

        for (let i = 0; i < recipe.ingredients.length; i++) {
            ingredients.push(recipe.ingredients[i].name)
        }
        return {
            data: {
                title: recipe.name,
                instructions: {
                    set: instructions
                },
                ingredients: {
                    set: ingredients
                },
                imageUrl: recipe.imageURL
            },
        }
    })
}

async function main() {
    try {
        const allRecipes = loadRecipes()
        for (let recipe of allRecipes) {
            await prismaClient.recipe.create(recipe)
            .catch(err => console.log(`Error trying to create recipes: ${err} recipe: ${recipe}`))
        }
    } catch (err) {
        console.log(err)
    }
}

/* async function createRecipe() {
    try {
        await prismaClient.recipe.create({
            data: {
                title: 'My First Recipe',
                description: 'Delicious pork',
                instructions: 'Write instructions on how to make recipe',
                ingredients: 'List the required ingredients'
            }
        })
    } catch(err) {
    console.log(err)
    } 
} */


/* async function main () {
    try {
        await createRecipe()
    } catch(err) {
        console.log(err)
    }
} */

main()
.catch(e => console.error(e))
.finally(async () => {
    await prismaClient.disconnect()
})

