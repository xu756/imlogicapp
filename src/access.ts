export default (initialState:any) => {
    console.log(initialState);
    return {
        user:initialState.User.userName !==''
    };
};
