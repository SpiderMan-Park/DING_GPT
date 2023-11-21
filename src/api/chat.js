import request from '@/utils/request'

export const GetChatList = (params) => {
    return request.get('/backend-api/conversations', {
        params: {
            offest: 0,
            limit: 28
        }
    })
}
export const GetModels = () => {
    return request.get('/backend-api/models')
}

export const DeleteChat = (id) => {
    return request.patch(`/backend-api/conversation/${id}`, {
        "is_visible": false
    })
}

export const DeleteAllChats = () => {
    return request.patch('/backend-api/conversations', {
        "is_visible": false
    })
}

export const EditChat = (id, title) => {
    return request.patch(`/backend-api/conversation/${id}`, {
        title
    })
}

export const GetChatDetail = (id) => {
    return request.get(`/backend-api/conversation/${id}`)
}