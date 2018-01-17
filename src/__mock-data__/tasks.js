
export const tasks = [
    {
        id: 184,
        content: 'task for toggling done status',
        position: 1,
        is_done: false,
        list_id: 208,
        created_at: '2018-01-03T15:11:12.524Z',
        updated_at: '2018-01-05T08:41:17.496Z'
    },
    {
        id: 202,
        content: '2',
        position: 2,
        is_done: true,
        list_id: 208,
        created_at: '2018-01-04T11:05:08.593Z',
        updated_at: '2018-01-05T08:40:55.422Z'
    },
    {
        id: 201,
        content: '1',
        position: 1,
        is_done: false,
        list_id: 215,
        created_at: '2018-01-04T11:05:08.153Z',
        updated_at: '2018-01-05T08:41:15.607Z'
    },
    {
        id: 215,
        content: '3',
        position: 2,
        is_done: true,
        list_id: 215,
        created_at: '2018-01-04T11:05:09.905Z',
        updated_at: '2018-01-05T08:41:10.638Z'
    },
    {
        id: 225,
        content: '1',
        position: 1,
        is_done: false,
        list_id: 225,
        created_at: '2018-01-03T15:11:32.609Z',
        updated_at: '2018-01-05T08:39:30.287Z'
    },
    {
        id: 404,
        content: 'task for deleting',
        position: 2,
        is_done: false,
        list_id: 225,
        created_at: '2018-01-03T15:11:32.609Z',
        updated_at: '2018-01-05T08:39:30.287Z'
    }
];

export const tasksOfTheList = [
    {
        id: 184,
        content: 'task for toggling done status',
        position: 1,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-03T15:11:12.524Z',
        updated_at: '2018-01-05T08:41:17.496Z'
    },
    {
        id: 202,
        content: '2',
        position: 2,
        is_done: true,
        list_id: 111,
        created_at: '2018-01-04T11:05:08.593Z',
        updated_at: '2018-01-05T08:40:55.422Z'
    },
    {
        id: 201,
        content: '1',
        position: 3,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-04T11:05:08.153Z',
        updated_at: '2018-01-05T08:41:15.607Z'
    },
    {
        id: 215,
        content: '3',
        position: 4,
        is_done: true,
        list_id: 111,
        created_at: '2018-01-04T11:05:09.905Z',
        updated_at: '2018-01-05T08:41:10.638Z'
    },
    {
        id: 225,
        content: '1',
        position: 5,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-03T15:11:32.609Z',
        updated_at: '2018-01-05T08:39:30.287Z'
    }
];
export const fetchingListId = 111;

export const task = {
        id: 11,
        content: 'only one task',
        position: 1,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-03T15:11:12.524Z',
        updated_at: '2018-01-05T08:41:17.496Z'
    };

export const newTaskContent = 'this is my new content';
export const updatedTask = {
    id: 11,
    content: newTaskContent,
    position: 1,
    is_done: false,
    list_id: 111,
    created_at: '2018-01-03T15:11:12.524Z',
    updated_at: '2018-01-05T08:41:17.496Z'
};

export const delTaskId = task.id;
export const toggledDoneTask = {
    id: 11,
    content: 'only one task',
    position: 1,
    is_done: true,
    list_id: 111,
    created_at: '2018-01-03T15:11:12.524Z',
    updated_at: '2018-01-05T08:41:17.496Z'
};


// uses in reducer.tests
export const taskForDel = {
    id: 404,
    content: 'task for deleting',
    position: 2,
    is_done: false,
    list_id: 225,
    created_at: '2018-01-03T15:11:32.609Z',
    updated_at: '2018-01-05T08:39:30.287Z'
};
export const tasksAfterDel = [
    {
        id: 184,
        content: 'task for toggling done status',
        position: 1,
        is_done: false,
        list_id: 208,
        created_at: '2018-01-03T15:11:12.524Z',
        updated_at: '2018-01-05T08:41:17.496Z'
    },
    {
        id: 202,
        content: '2',
        position: 2,
        is_done: true,
        list_id: 208,
        created_at: '2018-01-04T11:05:08.593Z',
        updated_at: '2018-01-05T08:40:55.422Z'
    },
    {
        id: 201,
        content: '1',
        position: 1,
        is_done: false,
        list_id: 215,
        created_at: '2018-01-04T11:05:08.153Z',
        updated_at: '2018-01-05T08:41:15.607Z'
    },
    {
        id: 215,
        content: '3',
        position: 2,
        is_done: true,
        list_id: 215,
        created_at: '2018-01-04T11:05:09.905Z',
        updated_at: '2018-01-05T08:41:10.638Z'
    },
    {
        id: 225,
        content: '1',
        position: 1,
        is_done: false,
        list_id: 225,
        created_at: '2018-01-03T15:11:32.609Z',
        updated_at: '2018-01-05T08:39:30.287Z'
    }
];

export const taskWithToggledDone = {
    id: 184,
    content: 'task for toggling done status',
    position: 1,
    is_done: true,
    list_id: 208,
    created_at: '2018-01-03T15:11:12.524Z',
    updated_at: '2018-01-05T08:41:17.496Z'
};
export const tasksAfterToggleDone = [
    {
        id: 202,
        content: '2',
        position: 2,
        is_done: true,
        list_id: 208,
        created_at: '2018-01-04T11:05:08.593Z',
        updated_at: '2018-01-05T08:40:55.422Z'
    },
    {
        id: 201,
        content: '1',
        position: 1,
        is_done: false,
        list_id: 215,
        created_at: '2018-01-04T11:05:08.153Z',
        updated_at: '2018-01-05T08:41:15.607Z'
    },
    {
        id: 215,
        content: '3',
        position: 2,
        is_done: true,
        list_id: 215,
        created_at: '2018-01-04T11:05:09.905Z',
        updated_at: '2018-01-05T08:41:10.638Z'
    },
    {
        id: 225,
        content: '1',
        position: 1,
        is_done: false,
        list_id: 225,
        created_at: '2018-01-03T15:11:32.609Z',
        updated_at: '2018-01-05T08:39:30.287Z'
    },
    {
        id: 404,
        content: 'task for deleting',
        position: 2,
        is_done: false,
        list_id: 225,
        created_at: '2018-01-03T15:11:32.609Z',
        updated_at: '2018-01-05T08:39:30.287Z'
    },
    {
        id: 184,
        content: 'task for toggling done status',
        position: 1,
        is_done: true,
        list_id: 208,
        created_at: '2018-01-03T15:11:12.524Z',
        updated_at: '2018-01-05T08:41:17.496Z'
    }
];

export const tasksAfterMovingUp = [
    {
        id: 184,
        content: 'task for toggling done status',
        position: 1,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-03T15:11:12.524Z',
        updated_at: '2018-01-05T08:41:17.496Z'
    },
    {
        id: 201,
        content: '1',
        position: 2,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-04T11:05:08.153Z',
        updated_at: '2018-01-05T08:41:15.607Z'
    },
    {
        id: 202,
        content: '2',
        position: 3,
        is_done: true,
        list_id: 111,
        created_at: '2018-01-04T11:05:08.593Z',
        updated_at: '2018-01-05T08:40:55.422Z'
    },
    {
        id: 215,
        content: '3',
        position: 4,
        is_done: true,
        list_id: 111,
        created_at: '2018-01-04T11:05:09.905Z',
        updated_at: '2018-01-05T08:41:10.638Z'
    },
    {
        id: 225,
        content: '1',
        position: 5,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-03T15:11:32.609Z',
        updated_at: '2018-01-05T08:39:30.287Z'
    }
];
export const tasksAfterMovingDown = [
    {
        id: 184,
        content: 'task for toggling done status',
        position: 1,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-03T15:11:12.524Z',
        updated_at: '2018-01-05T08:41:17.496Z'
    },
    {
        id: 201,
        content: '1',
        position: 2,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-04T11:05:08.153Z',
        updated_at: '2018-01-05T08:41:15.607Z'
    },
    {
        id: 215,
        content: '3',
        position: 3,
        is_done: true,
        list_id: 111,
        created_at: '2018-01-04T11:05:09.905Z',
        updated_at: '2018-01-05T08:41:10.638Z'
    },
    {
        id: 202,
        content: '2',
        position: 4,
        is_done: true,
        list_id: 111,
        created_at: '2018-01-04T11:05:08.593Z',
        updated_at: '2018-01-05T08:40:55.422Z'
    },
    {
        id: 225,
        content: '1',
        position: 5,
        is_done: false,
        list_id: 111,
        created_at: '2018-01-03T15:11:32.609Z',
        updated_at: '2018-01-05T08:39:30.287Z'
    }
];


