/**
 * 인덱스드 엑세스 타입
 */
function printAuthorInfo(author) {
    console.log(`${author.name} ${author.id} ${author.age}`);
}
const post = {
    title: "게시글 제목",
    content: "게시글 내용",
    author: {
        id: 1,
        name: "황성진",
        age: 28,
    },
};
printAuthorInfo(post.author);
export {};
