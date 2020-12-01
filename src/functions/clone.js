//create basic clone function
function clone(val) {
    return JSON.parse(JSON.stringify(val));
}
export { clone };
