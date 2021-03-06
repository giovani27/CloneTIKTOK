import Layout from "../components/layout";
import Feed from "../components/Feed";
import Sugestions from "../components/Sugestion";

import { openDB } from "../lib/opendb";

function Index({ posts }) {
  return (
    <div>
      <Layout>
        <Feed posts={posts}></Feed>
        <Sugestions></Sugestions>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const db = await openDB();
  const data = await db.collection("feed").find().toArray();

  // const data = [
  //   {
  //     id: 1,
  //     autor: {
  //       id: 1,
  //       avatar:
  //         "https://lh3.googleusercontent.com/ogw/ADGmqu_t5h4JgdyoAtxt10X4wcTMc6jEYwufDrEOweJTwA=s32-c-mo",
  //       name: "Giovani Antunes",
  //       username: "GiovaniAntunes",
  //     },
  //     description: "descriçao",
  //     tags: [{ title: "#youtube" }, { title: "#clone" }],
  //     songName: "Go Fuck Yourself - Two Feet",
  //     videoUrl:
  //       "https://v19.tiktokcdn.com/b4fdd4c8b95e9091fc3d75ae44b55b68/604436db/video/tos/useast2a/tos-useast2a-ve-0068c004/62fb4ee647954677811bd0bada6b819c/?a=1233&br=2206&bt=1103&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103062013280101880612150858C970&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=anZmOTU5OXZlNDMzNDczM0ApOjs6NzpoZWU1Nzk1N2hlNGc0ZHFjYWtmcS1gLS0wMTZzc2AuLmE1YGE0NWAtYzIyMjM6Yw%3D%3D&vl=&vr=",
  //     likes: "650",
  //     comments: "10",
  //     replace: "50",
  //   },
  //   {
  //     id: 2,
  //     autor: {
  //       id: 1,
  //       avatar:
  //         "https://lh3.googleusercontent.com/ogw/ADGmqu_t5h4JgdyoAtxt10X4wcTMc6jEYwufDrEOweJTwA=s32-c-mo",
  //       name: "Giovani Antunes",
  //       username: "GiovaniAntunes",
  //     },
  //     description: "descriçao2",
  //     tags: [{ title: "#youtube" }, { title: "#clone" }],
  //     songName: "som original - spider_slack",
  //     videoUrl:
  //       "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/3c97c4df9f8c42f68702cda9bb1c1456/?a=1988&br=2286&bt=1143&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1615083238&l=202103062013280101880612150858C970&lr=tiktok_m&mime_type=video_mp4&pl=0&policy=2&qs=0&rc=ajp0O3V0NTVpNDMzNDczM0ApaTRlZWQ4Zzs0N2c8NTpmZGdhZWtzLi1mNC1gLS0wMTZzc14yYi0zNjYxL141XjY1YDU6Yw%3D%3D&signature=54124b9d6e1ca5b7ef47c65eb491adb5&tk=tt_webid_v2&vl=&vr=",
  //     likes: "650",
  //     comments: "10",
  //     replace: "50",
  //   },
  // ];
  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Index;
