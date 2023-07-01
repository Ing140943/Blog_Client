import React from "react";
import { Link }  from "react-router-dom"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.hindustantimes.com/img/2021/01/18/550x309/2021-01-17T235329Z_1_LYNXMPEH0G0JV_RTROPTP_3_SOCCER-SPAIN-FCB-ATB-REPORT_1610989076000_1610989094513.JPG"
          alt="content-img"
        />
        <div className="user">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt=""/>
            </Link>
   
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Sit amet est placerat in egestas erat imperdiet. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Commodo ullamcorper a lacus vestibulum sed arcu. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Libero enim sed faucibus turpis in. Sagittis orci a scelerisque purus. Faucibus turpis in eu mi bibendum neque egestas. Augue mauris augue neque gravida. Lectus urna duis convallis convallis tellus id interdum velit. Sed enim ut sem viverra aliquet eget sit amet.

Scelerisque viverra mauris in aliquam sem. Consequat semper viverra nam libero. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Gravida arcu ac tortor dignissim convallis aenean et tortor. Sit amet nulla facilisi morbi tempus iaculis urna id. Mattis rhoncus urna neque viverra. Nisl nisi scelerisque eu ultrices vitae. Gravida cum sociis natoque penatibus et magnis dis. Bibendum at varius vel pharetra vel. Amet consectetur adipiscing elit pellentesque habitant morbi. Dignissim convallis aenean et tortor at risus viverra. Facilisis sed odio morbi quis commodo odio. Vel turpis nunc eget lorem dolor sed viverra. Ultricies mi eget mauris pharetra. Dui ut ornare lectus sit amet est placerat in egestas. Potenti nullam ac tortor vitae purus faucibus. Eget duis at tellus at urna.

Sed tempus urna et pharetra pharetra massa. In hendrerit gravida rutrum quisque. Hendrerit dolor magna eget est lorem ipsum dolor sit. Pretium vulputate sapien nec sagittis. Pellentesque diam volutpat commodo sed egestas egestas. Consequat nisl vel pretium lectus quam id leo in vitae. Facilisis mauris sit amet massa. Cursus sit amet dictum sit amet justo. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Non blandit massa enim nec dui nunc. Tristique senectus et netus et malesuada fames ac turpis egestas. Adipiscing diam donec adipiscing tristique risus nec. Viverra tellus in hac habitasse platea dictumst. Mattis enim ut tellus elementum. Justo laoreet sit amet cursus sit amet dictum sit amet. In iaculis nunc sed augue lacus viverra. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Vel pretium lectus quam id. Id ornare arcu odio ut. At erat pellentesque adipiscing commodo.

Facilisis sed odio morbi quis commodo. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Maecenas volutpat blandit aliquam etiam erat velit. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Hac habitasse platea dictumst vestibulum rhoncus est. Risus nec feugiat in fermentum posuere urna nec tincidunt. Elementum integer enim neque volutpat ac tincidunt. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Maecenas accumsan lacus vel facilisis volutpat est. Amet tellus cras adipiscing enim eu turpis egestas. Aliquam ut porttitor leo a diam. Tincidunt eget nullam non nisi est sit. Nibh praesent tristique magna sit.

Commodo viverra maecenas accumsan lacus. Eu feugiat pretium nibh ipsum consequat nisl vel. Aliquet risus feugiat in ante metus dictum at tempor. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Faucibus et molestie ac feugiat sed lectus vestibulum. Nisl nisi scelerisque eu ultrices. Convallis posuere morbi leo urna molestie. Iaculis urna id volutpat lacus. Nisi lacus sed viverra tellus in hac. Nunc vel risus commodo viverra maecenas accumsan lacus. Ornare lectus sit amet est.</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
