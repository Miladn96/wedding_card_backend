module.exports = function (plop) {
    // create your generators here
    plop.setGenerator(
        'model',
        {
            description: 'Generate a Mongoose model and TypeScript model',
            prompts: [
                {
                    type: 'input',
                    name: 'name',
                    message: 'Model name (e.g., User):',
                },
                // {
                //     type: 'confirm',
                //     name: 'addFields',
                //     message: 'Do you want to add fields?',
                // },
                // {
                //     type: 'recursive',
                //     name: 'fields',
                //     message: 'Add another field?',
                //     when: answers => answers.addFields,
                //     prompts: [
                //         {
                //             type: 'input',
                //             name: 'fieldName',
                //             message: 'Field name:',
                //         },
                //         {
                //             type: 'list',
                //             name: 'fieldType',
                //             message: 'Field type:',
                //             choices: ['String', 'Number', 'Boolean', 'Date', 'ObjectId'],
                //         },
                //     ],
                // }
            ],

            actions: [
                {
                    type: 'add',
                    path: 'src/models/{{lowerCase name}}.model.ts',
                    templateFile: 'plop-templates/mongoose-model.hbs',
                },
                {
                    type: 'add',
                    path: 'src/dto/types/{{lowerCase name}}.dto.ts',
                    templateFile: 'plop-templates/typescript-model.hbs',
                },
                {
                    type: 'add',
                    path: 'src/routes/{{lowerCase name}}.route.ts',
                    templateFile: 'plop-templates/express-route.hbs',
                },
                {
                    type: 'add',
                    path: 'src/controllers/{{lowerCase name}}.controller.ts',
                    templateFile: 'plop-templates/express-controller.hbs',
                },
            ],
        },);
}
