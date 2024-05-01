import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:(+216) 71 205 105">(+216) 71 205 105</Typography.Link>
      <Typography.Link href="https://tdiscount.tn/" target={"_blank"}>
        facebook
      </Typography.Link>
      <Typography.Link href="https://www.instagram.com/tdiscount_tn/" target={"_blank"}>
      instagram
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
