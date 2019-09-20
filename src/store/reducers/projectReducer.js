const initState = {
    projects:[
        {id: '1', title:'eeeeeeeee', content: 'aaaaaaaa'},
        {id: '2', title:'eeeeeeeee', content: 'aaaaaaaa'},
        {id: '3', title:'eeeeeeeee', content: 'aaaaaaaa'}
    ]
}
 

const projectReducer = (state = initState, action) => {
 switch (action.type) {
    case 'CREATE_PROJECT':
        console.log('created project', action.project)
 }
 return state
}

export default projectReducer
