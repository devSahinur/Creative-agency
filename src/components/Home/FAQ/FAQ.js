import React from 'react';
import Faq from 'react-faq-component';

const data = {
    rows: [
      {
        title: "Non consectetur a erat nam at lectus urna duis?",
        content: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
      },
      {
        title: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? ",
        content: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
      },
      {
        title: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
        content: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
      },
      {
        title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
        content: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
      },
      {
        title: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
        content: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in"
      },
      {
        title: "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
        content: "Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec."
      }]
  }

const FAQ = () => {

    const styles = {
        bgColor: '#FEF8F5',
        rowTitleTextSize: '20px',
        titleTextColor: "blue",
        rowTitleColor: "#6D6CF6",
        rowContentColor: 'grey',
        arrowColor: "#6D6CF6",
    };

    return (
        <section id="faq" className="faq section-bg">
            <div className="container" >

                <div className="section-title">
                    <h2>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                </div>
                <Faq 
                    data={data} 
                    styles={styles}
                />
            </div>
        </section>
    );
};

export default FAQ;