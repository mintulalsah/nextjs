import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Button, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import styles from "../contactus/ContactUs.module.css";
import imagepaths from "@/public/imagepaths";

const containerStyle = {
  width: "100%",
  height: "270px",
};
const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};
const contactUs = () => {
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
     
      <Box className={styles.contactus_bg_gradient_color}>
        <Box className={styles.bg_color_right_top}>
          <Box className={styles.bg_color_left_bottom}>
            <Box className="main">
              <Box className={styles.contactUs_maincontainer}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography className={styles.contact_us}>
                      Contact Us
                    </Typography>
                  </Grid>
                </Grid>
                <Box className={styles.contactUs__wrapper}>
                  <Grid container spacing={2} sx={{ pl: 5 }}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                    >
                      <Box className={styles.contactUs_container}>
                        <Box className={styles.leave_message} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}></Box>
                        <Box className={styles.contactusform_box}>
                          <form className={styles.form_details}>
                            <Typography
                              className={styles.leave_message_box}
                              sx={{
                                fontWeight: 500,
                                fontSize: "20px",
                                lineHeight: "24.2px",
                                marginTop: "15px",
                                fontFamily: "Inter",
                                color: "#D9AC5D",
                                pb: 3,
                              }}
                            >
                              Leave us a message
                            </Typography>
                            <Box className={styles.full_name_detail} sx={{ pb: 3 }}>
                              <Typography className={styles.full_name} sx={{ pb: 2 }}>
                                Full Name
                              </Typography>
                              <Box sx={{ display: "flex" }}>
                                <TextField
                                  variant="outlined"
                                  placeholder="Enter name"
                                  size="small"
                                  className={`${styles.text_field}`}
                                  sx={{
                                    "& fieldset": { border: "none" },
                                    input: { color: "#fff" },
                                  }}
                                  inputProps={{
                                    style: {
                                      color: "#AAAAAA",
                                      fontWeight: 400,
                                      fontFamily: "Inter",
                                      fontSize: "16px",
                                      lineHeight: "19px",
                                    },
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box className={styles.email_detail} sx={{ pb: 3 }}>
                              <Typography className={styles.email_address} sx={{ pb: 2 }}>
                                Email Address
                              </Typography>
                              <Box sx={{ display: "flex" }}>
                                <TextField
                                  variant="outlined"
                                  placeholder="Enter email"
                                  size="small"
                                  className={`${styles.text_field}`}
                                  sx={{
                                    "& fieldset": { border: "none" },
                                    input: { color: "#fff" },
                                  }}
                                  inputProps={{
                                    style: {
                                      color: "#AAAAAA",
                                      fontWeight: 500,
                                      fontFamily: "Inter",
                                      fontSize: "16px",
                                      lineHeight: "19px",
                                    },
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box className={styles.message_details} sx={{ pb: 3 }}>
                              <Typography className={styles.Message} sx={{ pb: 2 }}>
                                Message
                              </Typography>
                              <textarea
                                rows="8"
                                cols="68"
                                placeholder="Enter Message"
                                className={styles.message_box}
                                maxLength={200}
                                style={{
                                  color: "#AAAAAA",
                                  fontWeight: 500,
                                  fontFamily: "Inter",
                                  fontSize: "16px",
                                  lineHeight: "19px",
                                }}
                              />
                            </Box>
                            <Box>
                              <Button
                                type="submit"
                                className={styles.contact_Send_button}
                                sx={{
                                  textTransform: "capitalize",
                                  fontWeight: 700,
                                  fontSize: "16px",
                                  lineHeight: "19.36px",
                                  textAlign: "Center",
                                  marginLeft: "Auto",
                                  background: "#d9ac5d",
                                  fontFamily: "Inter",
                                  textAlign: 'center',
                                  padding: '10px 133px',
                                }}
                              >
                                Send
                              </Button>
                            </Box>
                          </form>
                        </Box>
                        <Box className={styles.contactus_positionimg} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}></Box>
                      </Box>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      className={styles.location_image}
                    >
                      <Box sx={{ marginTop: '56px' }} className={styles.contactus_userdetails}>
                        <Box>
                          <ul>
                            <li>
                              <img style={{ paddingRight: '20px' }} src={imagepaths.App_Store_Icon} alt="location" />
                              4517 Washington Ave. Manchester, Kentucky 39495
                            </li>
                            <li><img style={{ paddingRight: '20px' }} src={imagepaths.App_Store_Icon} alt="phone number" /> +1-234-081-1236</li>
                            <li><img style={{ paddingRight: '20px' }} src={imagepaths.App_Store_Icon} alt="email" />hello@info.com</li>
                          </ul>
                        </Box>
                        <Box className={styles.social_media}>
                          <Link href="https://www.youtube.com/" target="_blank">
                            <img
                              alt="youtube"
                              src={imagepaths.App_Store_Icon}
                              className={styles.App_Store_Icon}
                            />
                          </Link>
                          <Link href="https://www.instagram.com/" target="_blank">
                            <img
                              alt="instagram"
                              src={imagepaths.App_Store_Icon}
                              className={styles.App_Store_Icon}
                            />
                          </Link>
                          <Link href="https://www.facebook.com/" target="_blank">
                            <img
                              alt="facebook"
                              src={imagepaths.App_Store_Icon}
                              className={styles.App_Store_Icon}
                            />
                          </Link>
                          <Link href="https://twitter.com/" target="_blank">
                            <img
                              alt="twitter"
                              src={imagepaths.App_Store_Icon}
                              className={styles.App_Store_Icon}
                            />
                          </Link>
                        </Box>
                        <Box className={styles.App_Store_Icon}>
                          
                        </Box>
                      </Box>


                      {/* <Box
                      className={styles.img1_text}
                      sx={{ display: "flex", marginTop: "37px" }}
                    >
                      <Box className={styles.contactus_top_right_image}>
                        <img src={imagepaths.bg_top_right} alt="" />
                      </Box>
                      <img src={imagepaths.location_img} alt="location" />
                      <Typography
                        sx={{
                          marginLeft: "10px",
                          fontFamily: "Inter",
                          color: "#D9AC5D",
                        }}
                        className={styles.Washington}
                      >
                        4517 Washington Ave. Manchester, Kentucky 39495{" "}
                      </Typography>
                    </Box>
                    <Box
                      className={styles.img2_text}
                      sx={{ display: "flex", marginTop: "40px" }}
                    >
                      <img src={imagepaths.phone_img} alt="phone number" />
                      <Typography
                        sx={{
                          marginLeft: "10px",
                          fontFamily: "Inter",
                          color: "#D9AC5D",
                        }}
                      >
                        +1-234-081-1236
                      </Typography>
                    </Box>
                    <Box
                      className={styles.img3_text}
                      sx={{ display: "flex", marginTop: "30px" }}
                    >
                      <img src={imagepaths.email_img} alt="email" />
                      <Typography
                        sx={{
                          marginLeft: "10px",
                          fontFamily: "Inter",
                          color: "#D9AC5D",
                        }}
                      >
                        hello@info.com
                      </Typography>
                    </Box> */}
                      {/* <Box className={styles.social_media}>
                      <Link href="https://www.youtube.com/" target="_blank">
                        <img
                          alt="youtube"
                          src={imagepaths.youtube_img}
                          className={styles.social_media_icon}
                        />
                      </Link>
                      <Link href="https://www.instagram.com/" target="_blank">
                        <img
                          alt="instagram"
                          src={imagepaths.insta_img}
                          className={styles.social_media_icon}
                        />
                      </Link>
                      <Link href="https://www.facebook.com/" target="_blank">
                        <img
                          alt="facebook"
                          src={imagepaths.facebook_img}
                          className={styles.social_media_icon}
                        />
                      </Link>
                      <Link href="https://twitter.com/" target="_blank">
                        <img
                          alt="twitter"
                          src={imagepaths.twitter_img}
                          className={styles.social_media_icon}
                        />
                      </Link>
                    </Box> */}
                      {/* <Box>
                      <Box className={styles.contactUs_map_box}>
                        <LoadScript googleMapsApiKey="" className={styles.contactUs_map}>
                          <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={defaultCenter}
                            zoom={10}
                          >
                            <Marker onLoad={onLoad} position={defaultCenter} />
                          </GoogleMap>
                        </LoadScript>
                      </Box>
                    </Box> */}
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default contactUs;
