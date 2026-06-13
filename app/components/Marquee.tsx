export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span><b>Full-Stack Development</b></span><span>·</span>
        <span><b>Automation</b></span><span>·</span>
        <span><b>3D Web</b></span><span>·</span>
        <span><b>REST APIs</b></span><span>·</span>
        <span><b>UI Engineering</b></span><span>·</span>
        <span><b>Web Scraping</b></span><span>·</span>
        <span><b>Deployment</b></span><span>·</span>
        <span><b>SEO</b></span><span>·</span>
        {/* duplicate set — makes the loop seamless */}
        <span><b>Full-Stack Development</b></span><span>·</span>
        <span><b>Automation</b></span><span>·</span>
        <span><b>3D Web</b></span><span>·</span>
        <span><b>REST APIs</b></span><span>·</span>
        <span><b>UI Engineering</b></span><span>·</span>
        <span><b>Web Scraping</b></span><span>·</span>
        <span><b>Deployment</b></span><span>·</span>
        <span><b>SEO</b></span><span>·</span>
      </div>
    </div>
  );
}
