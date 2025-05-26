import { Request, Response } from 'express';


export const subscribeNewsletter = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ message: "Vui lòng nhập email!" });
      return;
    }

    console.log(`Email đăng ký: ${email}`);

    // Giả sử bạn sẽ lưu email vào database hoặc file JSON
    res.status(200).json({ message: "Cảm ơn bạn đã đăng ký nhận tin tức!" });
  } catch (error) {
    console.error("Lỗi khi xử lý đăng ký:", error);
    res.status(500).json({ message: "Có lỗi xảy ra. Vui lòng thử lại!" });
  }
};


/**
 * Điều khiển trang chủ
 */
export const getHomePage = (req: Request, res: Response ) => {
    try{
        const pageTitle = 'World Peas - Trang Chủ';
        res.render('homePage/home/home', { pageTitle });
    }catch(error){
        console.error('Loi Khi Tai May Chu:', error);
        res.status(500).send("da xay ra loi khi tai trang chu");
    }
}
