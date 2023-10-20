// import { createResource, Index } from "solid-js"
import { Index } from "solid-js"
// import dayjs from "dayjs"
// import { getLatestPosts } from "../api"
import type { PostMeta } from "../api"

interface PostProps {
    data: PostMeta
}

const PostItem = (props: PostProps) => {
    const { data } = props
    return (
        <a class="flex px-3 py-2 mt-2 mr-2 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10" href={data.url} target="_blank">
            <div flex-1>{data.title}</div>
            <div op-40 font-normal class="hidden sm:block">
                {data.published_at}
                {/* {dayjs(data.published_at).format("YYYY-MM-DD")} */}
            </div>
        </a>
    )
}

export default () => {
    // const [postLists] = createResource(getLatestPosts)
    const postLists: Array<object> = [
        {
            id: "2",
            title: "人只不过是自然与精神之间一座危险又狭窄的桥梁",
            url: "https://idealdestructor.github.io/blog/archives/Steppenwolf/",
            published_at: "2022-05-20",
        },
        {
            id: "1",
            title: "「 复 古 未 来 」S y n t h w a v e 合 成 器 浪 潮",
            url: "https://idealdestructor.github.io/blog/archives/synthwave/",
            published_at: "2021-03-11",
        },

        {
            id: "0",
            title: "冰岛、新古典音乐、现代极简与存在主义",
            url: "https://idealdestructor.github.io/blog/archives/neoclassical/",
            published_at: "2019-06-08",
        },
    ]
    const openLink = () => {
        window.open("https://idealdestructor.github.io/blog", "_blank")
    }
    return (
        <>
            <h2 class="flex items-center mt-14 mb-4 font-semibold text-3xl">
                <span flex-1 class="title">
                    Latest Posts
                </span>
                <div onClick={openLink} class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
                    <div class="m-2 i-ri-arrow-right-up-line"></div>
                </div>
            </h2>
            <div class="grid grid-cols-1 -mx-2">
                <Index each={postLists}>{(item) => <PostItem data={item()} />}</Index>
            </div>
        </>
    )
}
