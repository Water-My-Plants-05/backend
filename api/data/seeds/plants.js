exports.seed = function(knex) {
    return knex('plants')
    .insert([
        {
            nickname: 'Madam Stole', species: 'Rose', h2oFrequency: 'Daily',
        },
        {
            nickname: 'Professor Apt', species: 'Leaf', h2oFrequency: 'Monthly',
        },
        {
            nickname: 'Phoenix', species: 'Tree', h2oFrequency: 'Never',
        },
        {
            nickname: 'Lady Elegy', species: 'Lotus', h2oFrequency: 'Weekly',
        }
    ])}