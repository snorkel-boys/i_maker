const initialState = {
    goals: [
        {
            title: '나는 8월 15일까지 몸무게를 만들겠다.',
            goal: '65kg',
            dueDate: '2018-08-15'
        },
        {
            title: '나는 8월 15일까지 몸무게를 만들겠다.',
            goal: '65kg',
            dueDate: '2018-08-15'
        }
    ],
}

export default function goal(state = initialState, action) {
    switch(action) {
        // case '':
        //     return state;
        //     break;
        default:
            return state;
    }
}