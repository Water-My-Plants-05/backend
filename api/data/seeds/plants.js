exports.seed = function(knex) {
    return knex('plants')
    .insert([
        {
            nickname: 'Madam Stole', species: 'Rose', h20Frequency: 'Daily',
            nickname: 'Professor Apt', species: 'Leaf', h20Frequency: 'Monthly',
            nickname: 'Phoenix', species: 'Tree', h20Frequency: 'Never',
            nickname: 'Lady Elegy', species: 'Lotus', h20Frequency: 'Weekly',
        }
    ])}