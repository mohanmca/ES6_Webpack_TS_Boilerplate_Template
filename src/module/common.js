import R from 'ramda'

export function uniqueObjects(key) { 
    return R.compose(R.map(R.head), R.values, R.groupBy(R.prop(key))) 
}
