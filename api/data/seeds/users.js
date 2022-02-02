exports.seed = function(knex) {
    return knex('users')
    .insert([{
        username: 'Albert',
        password: 'Einstein'
    },
    {
        username:'Carl',
        password: 'Sagan'
        
    }])
}