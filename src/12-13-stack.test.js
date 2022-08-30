// using object
function buildCategoryMapV1(categoryList) {
    console.log('🏆 ~ categoryList', categoryList);
    if (!Array.isArray(categoryList) || categoryList.length === 0) return {};
    let result = {};
    result = categoryList.reduce((map, category) => {
        map[category.id] = category;
        return map;
    }, {});
    return result;
}

// using Map
function buildCategoryMapV2(categoryList) {
    if (!Array.isArray(categoryList) || categoryList.length === 0) return new Map();
    return categoryList.reduce((map, category) => {
        map.set(category.id, category);
        return map;
    }, new Map());
}

const categoryList = [
    { id: 1, name: 'iphone' },
    { id: 2, name: 'macbook' },
];

console.log(buildCategoryMapV2(categoryList));

describe('V1', () => {
    it('test', () => {
        expect(buildCategoryMapV1(categoryList)).toEqual({
            1: { id: 1, name: 'iphone' },
            2: { id: 2, name: 'macbook' },
        });

        expect(buildCategoryMapV1([])).toEqual({});
    });
});
