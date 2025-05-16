import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (res) => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Cảm ơn anh/chị đã gửi email 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: 'Em tạm thời không nhận được email 😢',
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className="c-space my-20 scroll-mt-28" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text mt-8">Hãy gửi email!</h3>
          <p className="text-white-600 mt-3 text-lg">
            Nếu anh/chị đang tìm kiếm một thực tập sinh nhiệt huyết, sẵn sàng
            học hỏi từ thực tế, em rất mong có cơ hội được đồng hành cùng
            anh/chị trong công việc.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Họ và tên</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="vd., Nguyễn Văn A"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Địa chỉ email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="vd., nguyenvana@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Tin nhắn của bạn</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hãy gửi tôi suy nghĩ hoặc câu hỏi của bạn..."
              />
            </label>

            <button
              className="field-btn cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Đang gửi...' : 'Gửi tin nhắn'}

              <img
                src="/assets/arrow-up.png"
                alt="mũi tên lên"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
