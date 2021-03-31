export const FETCH_API = 'FETCH_API'
export const fetchAPI = (projectsList, tableInfo, columns) => ({
    type: FETCH_API,
    payload: {projectsList, tableInfo, columns}
})


export const fetchApiHandler = () => async (dispatch) => {
    const response = await fetch('http://timeapi.kaaylabs.com/api/v1/project_view/')
    const data = await response.json()
    console.log(data['data'].map(a=>a['status']))
    dispatch(fetchAPI(
        data['data'],
        data['metadata']['tableInfo'],
        data['metadata']['columns']))
}