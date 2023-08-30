import Post from "./Post";

const posts = [
  {
    title: "Redundant Circuit",
    body: "We need to override the virtual CSS panel.",
  },
  {
    title: "Mobile Sensor",
    body: "The DNS system is down, quantify the haptic firewall so we can reboot the ASCII card",
  },
  {
    title: "Back-End Feed",
    body: "I will transmit the online VGA application that should hard drive the CLI wall.",
  },
  {
    title: "Multi-Byte Transmitter",
    body: "Calculating the alarm won't do anything, we need to backup the optical ADP pixel.",
  },
  {
    title: "Solid State Microchip",
    body: "We need to connect the primary EXE application.",
  },
  {
    title: "Back-End Microchip",
    body: "Try to transmit the SSD program, it'll compress the optical monitor.",
  },
  {
    title: "Back-End Microchip",
    body: "Try to transmit the SSD program, it'll compress the optical monitor.",
  },
];

function PostsList() {
  return (
    <ul className="post-list">
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </ul>
  );
}

export default PostsList;
