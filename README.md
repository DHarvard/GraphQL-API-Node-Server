# graphqlapi-node-server

## 1. Project setup

Download or clone and then install required packages using:
```
npm install
```

### Opens the GraphQL Prisma Playground 
Open at [http://localhost:4000](http://localhost:4000)
```
npm run dev
```

### Starts the Graphql server using apollo server
Opens at [http://localhost:5555](http://localhost:5000)
```
npm start
```

## 2. To start from scratch/reset 

#### Nuke the existing docker
```
npm run nuke
```

#### Starts an instance of docker
```
npm run launchDocker
```

#### Create the DB
```
npm run createDB
```

#### Generate the Prisma Client
```
npm run generate
```

#### Runs the seed scripts
```
npm run seed
```
## 3. How to use API 
Here are some examples of some queries and mutations that can be done to us the GraphQL API. I have provided an example_queries.gql within the data folder found within the prisma folder.

#### Get all recipes returning their id, title, instructions, and ingredients
```
query allRecipes {
  Recipes {
    id 
    title
    instructions
    ingredients {
      quantity
      title
      type
    }
  }
}
```

#### Get one recipe by its id returning their id, title, instructions, and ingredients
Make sure the id is a correct id. Copy one of the recipes ids after you get all of the recipes.
```
query getRecipe {
  Recipe(id: "ck9erruad0000fyv4gs0spxmz") {
    id
    title
    instructions
    ingredients {
      quantity
      title
      type
    }
  }
}
```

#### Search for recipes that contain a specific string found within the title of the recipe
```
query filterRecipes {
  Recipes(searchString: "Roasted") {
    id
    title
    instructions
    ingredients {
      quantity
      title
      type
    }
  }
}
```

#### Create a new recipe
```
mutation createRecipe {
  createOneRecipe (data: {
    
    title: "Chicken Roast"
    instructions: {
      set: [
      	"Mix Ingredients together"
      	"Cook in crock pot for 3 hours",
    ]
    } 
    ingredients: {
      create: [
        { 
          quantity: "2 lbs"
        	title: "chicken"
          type: "meat"
        }
        { 
          quantity: "2 cups"
        	title: "chicken borth"
          type: "produce"
        }
        { 
          quantity: "1 package"
        	title: "italian seasoning"
          type: "baking"
        }
      ]
    }
    imageUrl: ""
  } 
  ){
    id
    title
    instructions
    ingredients {
      quantity
      title
      type
    }
  }
  }
```

#### Update a recipe by its id
I have figured out how to update everything except the ingredients within the recipe (so I have left out the ingredients for this mutation). (I was able to figure out how to add ingredients but not update the current ingredients).
```
mutation updateRecipe {
  updateOneRecipe (where: { id: "ck9evg6fq0029amv451nbhr32"}
    data: {
    
    title: "Updated Recipe"
    instructions: {
      set: [
      	"Updated instruction"
      	"Updated instruction",
    ]
    } 
    imageUrl: ""
  } 
  ){
    id
    title
    instructions
    ingredients {
      quantity
      title
      type
    }
  }
  }
```

#### Delete a recipe by its id
Delete a recipe and return the id and title of the deleted recipe
```
mutation deleteRecipe {
    deleteOneRecipe (where: {id: "ck9evjub00033amv4fh347o0e"})
    {
      id
      title
    }
  }
  ```