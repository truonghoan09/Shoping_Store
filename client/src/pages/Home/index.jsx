import { useSelector } from 'react-redux';
import styles from './Home.module.scss';
import { storage } from '../../App';
import {getDownloadURL, ref, deleteObject} from "firebase/storage"
import { useState } from 'react';

const HomePage = () => {
    const theme_now = useSelector(state => state.setThemeReducer.theme);
    // const imgDemoRef = ref(storage, 'z3436509291165_69d1217c108a0347a0dad79211804ea3.jpg')
    // const [src, setSrc] = useState('');
    // getDownloadURL(imgDemoRef).then((url) => {
    //     setSrc(url);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const handleDeleteImage = () => {
    //     deleteObject(imgDemoRef).then(() => {
    //         // File deleted successfully
    //       }).catch((error) => {
    //         // Uh-oh, an error occurred!
    //       });
    // }
  return (
      <>
          <div className={`${styles.background} ${styles[theme_now]}`}>
              <div className={styles.bigTitle}>SIÊU THỊ DỤNG CỤ THỂ THAO</div>

              <div className={styles.containerGrid1}>
                  <div
                      className={styles.content1}
                  >
                      <div className={styles.title}>Chất lượng</div>
                      <p>
                          Chào mừng bạn đến với siêu thị dụng cụ thể thao chất lượng hàng đầu! Chúng tôi tự hào là một địa điểm mua sắm đáng tin cậy và đa dạng nhất cho những người yêu thích thể thao. Tại siêu thị của chúng tôi, bạn sẽ tìm thấy một sự lựa chọn đa dạng các loại dụng cụ thể thao chất lượng cao, từ các sản phẩm cho bộ môn bóng đá, bóng rổ, cầu lông đến đi xe đạp, leo núi, và cả các dụng cụ tập luyện trong phòng gym.
                      </p>
                  </div>
                  <img className={styles.image1} src='https://img.freepik.com/free-photo/view-composition-with-neatly-arranged-organized-sport-items_23-2150275220.jpg?w=2000&t=st=1684400383~exp=1684400983~hmac=eaf2a6d9e5ee731162b6413f974bdab05022a0c01a70e6576b8e088799819b54 2000w'/>
              </div>
              <div className={styles.containerGrid2}>
                  <div
                      className={styles.content2}
                      >
                      <div className={styles.title}>Cam kết</div>
                      <p>
                          Với cam kết vững chắc đem đến sản phẩm chất lượng và dịch vụ tuyệt vời, chúng tôi luôn duy trì mối quan hệ đồng lòng với các thương hiệu nổi tiếng và đáng tin cậy trong ngành thể thao. Chúng tôi thiết lập mối quan hệ hợp tác chặt chẽ với các nhà sản xuất hàng đầu trong ngành để đảm bảo sự hài lòng tuyệt đối cho khách hàng. Với đa dạng sản phẩm đáp ứng nhu cầu từ các môn thể thao khác nhau, chúng tôi tự tin rằng bạn sẽ tìm thấy những sản phẩm phù hợp với đam mê thể thao của mình.                        
                      </p>
                  </div>
                  <img className={styles.image2} src='https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631009.jpg?w=900&t=st=1684401200~exp=1684401800~hmac=fc0ee99dcdc916740100370aa536d0ad7fe0687638e98ed83f8f612452430d36'/>
              </div>
              <div className={styles.containerGrid3}>
                  <div
                      className={styles.content3}
                      >
                      <div className={styles.title}>Trải nghiệm</div>
                      <p>
                          Với sự chuyên nghiệp và tận tâm, chúng tôi cam kết mang đến cho bạn trải nghiệm mua sắm tuyệt vời tại siêu thị dụng cụ thể thao hàng đầu. Chúng tôi cung cấp những sản phẩm chất lượng và đa dạng, đáp ứng mọi nhu cầu thể thao của bạn. Nhân viên giàu kinh nghiệm của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn trong việc chọn lựa những sản phẩm phù hợp với sở thích và mục tiêu cá nhân.
                      </p>
                  </div>    
                  <img className={styles.image3} src='https://img.freepik.com/free-photo/woman-man-chatting-gym-door_1262-700.jpg?w=900&t=st=1684402039~exp=1684402639~hmac=174954bd5e465723bce8fef1fc7f5ac221eb962c8d5f6628b8d9c4a3ebeeefef'/>                        
              </div>
        
              <div
                  style={{
                      borderBottom: "solid grey 0.1rem",
                      height: "2rem"
                  }}
              ></div>

          </div>
      </>
  )
}

export default HomePage;