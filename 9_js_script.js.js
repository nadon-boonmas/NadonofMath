/* =========================================================
   Nadon of Math — script.js
   แก้ไข/เพิ่มผลงานได้ที่ object DATA ด้านล่างนี้ที่เดียว
   ========================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     1) ข้อมูลผลงานทั้งหมด (แก้ตรงนี้เพื่อเพิ่มผลงานใหม่)
     --------------------------------------------------------- */
  const DATA = {
    books: [
      {
        id: 'polynomial',
        title: 'พหุนามเบื้องต้น',
        description: 'เรียนรู้แนวคิดพื้นฐานของเอกนาม พหุนาม ดีกรี และการดำเนินการของพหุนาม',
        author: 'Nadon',
        level: 'ม.2',
        pages: 68,
        status: 'ฟรี',
        symbol: 'x²',
        cover: 'assets/images/book-cover-1.jpg',
        pdf: 'pdf/books/polynomial.pdf',
        contents: [
          'เอกนามและพหุนามคืออะไร',
          'ดีกรีของเอกนามและพหุนาม',
          'การบวกและการลบพหุนาม',
          'การคูณพหุนาม',
          'การหารพหุนามด้วยเอกนาม',
          'โจทย์ปัญหาและแบบฝึกหัดท้ายบท'
        ],
        previews: [
          'assets/previews/polynomial-1.jpg',
          'assets/previews/polynomial-2.jpg',
          'assets/previews/polynomial-3.jpg'
        ]
      },
      {
        id: 'linear-equation',
        title: 'สมการเชิงเส้นตัวแปรเดียว',
        description: 'ปูพื้นฐานการแก้สมการอย่างเป็นขั้นตอน พร้อมเทคนิคตรวจคำตอบและโจทย์ปัญหา',
        author: 'Nadon',
        level: 'ม.1',
        pages: 54,
        status: 'ฟรี',
        symbol: 'ax+b',
        cover: 'assets/images/book-cover-2.jpg',
        pdf: 'pdf/books/linear-equation.pdf',
        contents: [
          'แบบรูปและความสัมพันธ์',
          'สมบัติของการเท่ากัน',
          'การแก้สมการเชิงเส้นตัวแปรเดียว',
          'การตรวจสอบคำตอบ',
          'โจทย์ปัญหาเกี่ยวกับสมการ'
        ],
        previews: [
          'assets/previews/linear-equation-1.jpg',
          'assets/previews/linear-equation-2.jpg',
          'assets/previews/linear-equation-3.jpg'
        ]
      },
      {
        id: 'pythagoras',
        title: 'ทฤษฎีบทพีทาโกรัส',
        description: 'ทำความเข้าใจความสัมพันธ์ a² + b² = c² พร้อมบทกลับและการประยุกต์ในชีวิตจริง',
        author: 'Nadon',
        level: 'ม.2',
        pages: 46,
        status: 'ฟรี',
        symbol: '√',
        cover: 'assets/images/book-cover-3.jpg',
        pdf: 'pdf/books/pythagoras.pdf',
        contents: [
          'รูปสามเหลี่ยมมุมฉาก',
          'ทฤษฎีบทพีทาโกรัส',
          'บทกลับของทฤษฎีบทพีทาโกรัส',
          'สามเหลี่ยมพีทาโกรัสที่ควรจำ',
          'การประยุกต์ใช้ในชีวิตประจำวัน'
        ],
        previews: [
          'assets/previews/pythagoras-1.jpg',
          'assets/previews/pythagoras-2.jpg',
          'assets/previews/pythagoras-3.jpg'
        ]
      },
      {
        id: 'quadratic',
        title: 'สมการกำลังสองตัวแปรเดียว',
        description: 'แยกตัวประกอบ กำลังสองสมบูรณ์ และสูตรกำลังสอง พร้อมตัวอย่างแบบละเอียด',
        author: 'Nadon',
        level: 'ม.3',
        pages: 72,
        status: 'ฟรี',
        symbol: 'ax²',
        cover: 'assets/images/book-cover-4.jpg',
        pdf: 'pdf/books/quadratic.pdf',
        contents: [
          'รูปทั่วไปของสมการกำลังสอง',
          'การแยกตัวประกอบพหุนามดีกรีสอง',
          'การทำให้เป็นกำลังสองสมบูรณ์',
          'สูตรกำลังสอง (Quadratic Formula)',
          'โจทย์ปัญหาเกี่ยวกับสมการกำลังสอง'
        ],
        previews: [
          'assets/previews/quadratic-1.jpg',
          'assets/previews/quadratic-2.jpg',
          'assets/previews/quadratic-3.jpg'
        ]
      },
      {
        id: 'ratio-percent',
        title: 'อัตราส่วน สัดส่วน และร้อยละ',
        description: 'รวมเทคนิคคิดเลขเร็วเรื่องอัตราส่วนและร้อยละ พร้อมโจทย์ประยุกต์ทางการเงิน',
        author: 'Nadon',
        level: 'ม.1',
        pages: 58,
        status: 'ฟรี',
        symbol: '%',
        cover: 'assets/images/book-cover-5.jpg',
        pdf: 'pdf/books/ratio-percent.pdf',
        contents: [
          'อัตราส่วนและอัตราส่วนที่เท่ากัน',
          'สัดส่วนและการแก้สัดส่วน',
          'ร้อยละในชีวิตประจำวัน',
          'กำไร ขาดทุน ส่วนลด ดอกเบี้ย',
          'แบบฝึกหัดรวม'
        ],
        previews: [
          'assets/previews/ratio-percent-1.jpg',
          'assets/previews/ratio-percent-2.jpg',
          'assets/previews/ratio-percent-3.jpg'
        ]
      },
      {
        id: 'statistics',
        title: 'สถิติเบื้องต้นและการนำเสนอข้อมูล',
        description: 'อ่านและวิเคราะห์ข้อมูลด้วยค่ากลาง แผนภาพ และตารางแจกแจงความถี่',
        author: 'Nadon',
        level: 'ม.3',
        pages: 64,
        status: 'ฟรี',
        symbol: 'Σ',
        cover: 'assets/images/book-cover-6.jpg',
        pdf: 'pdf/books/statistics.pdf',
        contents: [
          'ข้อมูลและการเก็บรวบรวมข้อมูล',
          'ตารางแจกแจงความถี่',
          'ค่าเฉลี่ยเลขคณิต มัธยฐาน ฐานนิยม',
          'แผนภาพกล่องและฮิสโทแกรม',
          'การแปลความหมายของข้อมูล'
        ],
        previews: [
          'assets/previews/statistics-1.jpg',
          'assets/previews/statistics-2.jpg',
          'assets/previews/statistics-3.jpg'
        ]
      }
    ],

    exams: [
      {
        id: 'polynomial-test',
        title: 'แบบทดสอบพหุนาม ม.2',
        description: 'ชุดข้อสอบครอบคลุมการบวก ลบ คูณ หารพหุนาม พร้อมเฉลยอย่างละเอียด',
        topic: 'พหุนาม',
        level: 'ม.2',
        questions: 30,
        difficulty: 'ปานกลาง',
        duration: '60 นาที',
        status: 'ฟรี',
        symbol: '∑',
        cover: 'assets/images/exam-cover-1.jpg',
        pdf: 'pdf/exams/polynomial-test.pdf',
        solution: 'pdf/exams/polynomial-solution.pdf',
        topics: ['เอกนาม', 'ดีกรีของพหุนาม', 'การบวก-ลบพหุนาม', 'การคูณพหุนาม', 'การหารด้วยเอกนาม'],
        samples: [
          'จงหาผลบวกของ (3x² + 5x − 2) + (x² − 4x + 7)',
          'จงหาดีกรีของพหุนาม 7x³y² − 4xy + 9',
          'จงหาผลคูณของ (2x − 3)(x + 5)',
          'จงหาผลหาร (12x⁴ − 8x³ + 4x²) ÷ 4x²'
        ],
        previews: [
          'assets/previews/polynomial-test-1.jpg',
          'assets/previews/polynomial-test-2.jpg'
        ]
      },
      {
        id: 'linear-equation-test',
        title: 'แบบฝึกหัดสมการเชิงเส้น ม.1',
        description: 'ฝึกแก้สมการตัวแปรเดียวตั้งแต่ระดับพื้นฐานจนถึงโจทย์ปัญหา',
        topic: 'สมการเชิงเส้นตัวแปรเดียว',
        level: 'ม.1',
        questions: 25,
        difficulty: 'ง่าย',
        duration: '45 นาที',
        status: 'ฟรี',
        symbol: '=',
        cover: 'assets/images/exam-cover-2.jpg',
        pdf: 'pdf/exams/linear-equation-test.pdf',
        solution: 'pdf/exams/linear-equation-solution.pdf',
        topics: ['สมบัติการเท่ากัน', 'การแก้สมการ', 'การตรวจคำตอบ', 'โจทย์ปัญหา'],
        samples: [
          'จงแก้สมการ 5x − 8 = 27',
          'จงแก้สมการ 3(x + 4) = 2x + 19',
          'จำนวนหนึ่งเมื่อคูณด้วย 4 แล้วลบด้วย 7 ได้ 33 จงหาจำนวนนั้น'
        ],
        previews: [
          'assets/previews/linear-equation-test-1.jpg',
          'assets/previews/linear-equation-test-2.jpg'
        ]
      },
      {
        id: 'pythagoras-test',
        title: 'ข้อสอบทฤษฎีบทพีทาโกรัส',
        description: 'โจทย์คำนวณด้านของสามเหลี่ยมมุมฉากและการประยุกต์ในรูปเรขาคณิต',
        topic: 'พีทาโกรัส',
        level: 'ม.2',
        questions: 20,
        difficulty: 'ปานกลาง',
        duration: '40 นาที',
        status: 'ฟรี',
        symbol: '△',
        cover: 'assets/images/exam-cover-3.jpg',
        pdf: 'pdf/exams/pythagoras-test.pdf',
        solution: 'pdf/exams/pythagoras-solution.pdf',
        topics: ['สามเหลี่ยมมุมฉาก', 'บทกลับพีทาโกรัส', 'การประยุกต์'],
        samples: [
          'สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว 9 และ 12 หน่วย จงหาด้านตรงข้ามมุมฉาก',
          'ด้านยาว 8, 15 และ 17 หน่วย เป็นสามเหลี่ยมมุมฉากหรือไม่ เพราะเหตุใด'
        ],
        previews: [
          'assets/previews/pythagoras-test-1.jpg',
          'assets/previews/pythagoras-test-2.jpg'
        ]
      },
      {
        id: 'quadratic-test',
        title: 'ข้อสอบสมการกำลังสอง ม.3',
        description: 'รวมโจทย์แยกตัวประกอบ สูตรกำลังสอง และโจทย์ปัญหาระดับสอบเข้า',
        topic: 'สมการกำลังสอง',
        level: 'ม.3',
        questions: 35,
        difficulty: 'ยาก',
        duration: '75 นาที',
        status: 'ฟรี',
        symbol: 'b²−4ac',
        cover: 'assets/images/exam-cover-4.jpg',
        pdf: 'pdf/exams/quadratic-test.pdf',
        solution: 'pdf/exams/quadratic-solution.pdf',
        topics: ['แยกตัวประกอบ', 'กำลังสองสมบูรณ์', 'สูตรกำลังสอง', 'โจทย์ปัญหา'],
        samples: [
          'จงแก้สมการ x² − 7x + 12 = 0',
          'จงแก้สมการ 2x² + 5x − 3 = 0 โดยใช้สูตรกำลังสอง',
          'สี่เหลี่ยมผืนผ้ามีพื้นที่ 96 ตารางหน่วย ด้านยาวมากกว่าด้านกว้าง 4 หน่วย จงหาความกว้าง'
        ],
        previews: [
          'assets/previews/quadratic-test-1.jpg',
          'assets/previews/quadratic-test-2.jpg'
        ]
      },
      {
        id: 'number-theory-olympiad',
        title: 'โจทย์ทฤษฎีจำนวน ระดับ Olympiad',
        description: 'โจทย์ท้าทายเรื่องจำนวนเต็ม การหารลงตัว และสมภาค สำหรับผู้เตรียมสอบแข่งขัน',
        topic: 'ทฤษฎีจำนวน',
        level: 'ม.3',
        questions: 15,
        difficulty: 'Olympiad',
        duration: '90 นาที',
        status: 'ฟรี',
        symbol: '≡',
        cover: 'assets/images/exam-cover-5.jpg',
        pdf: 'pdf/exams/number-theory-olympiad.pdf',
        solution: 'pdf/exams/number-theory-olympiad-solution.pdf',
        topics: ['การหารลงตัว', 'ห.ร.ม. และ ค.ร.น.', 'จำนวนเฉพาะ', 'สมภาค (Congruence)'],
        samples: [
          'จงพิสูจน์ว่า n³ − n หารด้วย 6 ลงตัวทุกจำนวนเต็ม n',
          'จงหาเศษจากการหาร 7¹⁰⁰ ด้วย 5',
          'จงหาจำนวนเต็มบวก n ที่น้อยที่สุดซึ่ง n! หารด้วย 1000 ลงตัว'
        ],
        previews: [
          'assets/previews/number-theory-1.jpg',
          'assets/previews/number-theory-2.jpg'
        ]
      },
      {
        id: 'statistics-test',
        title: 'แบบทดสอบสถิติเบื้องต้น',
        description: 'อ่านกราฟ ตารางแจกแจงความถี่ และคำนวณค่ากลางของข้อมูล',
        topic: 'สถิติ',
        level: 'ม.3',
        questions: 22,
        difficulty: 'ง่าย',
        duration: '45 นาที',
        status: 'ฟรี',
        symbol: 'x̄',
        cover: 'assets/images/exam-cover-6.jpg',
        pdf: 'pdf/exams/statistics-test.pdf',
        solution: 'pdf/exams/statistics-solution.pdf',
        topics: ['ค่าเฉลี่ยเลขคณิต', 'มัธยฐาน', 'ฐานนิยม', 'การอ่านแผนภาพ'],
        samples: [
          'ข้อมูลชุดหนึ่งคือ 4, 7, 7, 9, 13 จงหาค่าเฉลี่ย มัธยฐาน และฐานนิยม',
          'จากฮิสโทแกรมที่กำหนด จงหาช่วงที่มีความถี่สูงสุด'
        ],
        previews: [
          'assets/previews/statistics-test-1.jpg',
          'assets/previews/statistics-test-2.jpg'
        ]
      }
    ],

    ai: [
      {
        id: 'math-artwork',
        title: 'Mathematical AI Artwork',
        description: 'ชุดภาพศิลปะที่ตีความความงามของสมการและรูปทรงเรขาคณิตด้วย AI',
        type: 'AI Generated Artwork',
        tools: 'AI / Digital Art',
        date: '2026-01-12',
        status: 'Free',
        symbol: '∞',
        cover: 'assets/images/ai-cover-1.jpg',
        file: 'pdf/ai/math-artwork.pdf',
        concept: 'นำสมการที่คุ้นเคยในห้องเรียน เช่น กราฟพาราโบลาและเกลียวฟีโบนักชี มาถ่ายทอดเป็นภาพศิลปะ เพื่อให้ผู้เรียนเห็นว่าคณิตศาสตร์มีความงามในตัวเอง',
        process: [
          'เลือกหัวข้อคณิตศาสตร์ที่ต้องการสื่อสาร',
          'ร่างองค์ประกอบภาพและกำหนดโทนสี',
          'เขียน prompt และสร้างภาพต้นแบบด้วย AI',
          'คัดเลือกและปรับแต่งภาพขั้นสุดท้าย',
          'จัดหน้าเป็นไฟล์ PDF สำหรับเผยแพร่'
        ],
        previews: ['assets/previews/ai-artwork-1.jpg', 'assets/previews/ai-artwork-2.jpg', 'assets/previews/ai-artwork-3.jpg']
      },
      {
        id: 'geometry-visualizer',
        title: 'Geometry Visualizer',
        description: 'สื่อภาพเคลื่อนไหวอธิบายการพิสูจน์ทฤษฎีบทพีทาโกรัสแบบเห็นภาพ',
        type: 'Interactive Media',
        tools: 'JavaScript / Canvas / AI',
        date: '2026-01-28',
        status: 'Free',
        symbol: '△',
        cover: 'assets/images/ai-cover-2.jpg',
        file: '',
        concept: 'เปลี่ยนการพิสูจน์ที่เป็นสัญลักษณ์ให้กลายเป็นภาพที่ขยับได้ ช่วยให้ผู้เรียนเข้าใจว่าทำไมพื้นที่สองรูปจึงเท่ากัน',
        process: [
          'ศึกษาวิธีพิสูจน์แบบจัดเรียงพื้นที่',
          'ออกแบบ storyboard ของแอนิเมชัน',
          'ใช้ AI ช่วยร่างโครงสร้างโค้ด Canvas',
          'ทดสอบกับผู้เรียนและปรับจังหวะการเคลื่อนไหว'
        ],
        previews: ['assets/previews/geometry-visualizer-1.jpg', 'assets/previews/geometry-visualizer-2.jpg']
      },
      {
        id: 'ai-problem-generator',
        title: 'AI Math Problem Generator',
        description: 'เครื่องมือช่วยสร้างโจทย์พหุนามและสมการพร้อมเฉลยแบบอัตโนมัติ',
        type: 'AI Tool',
        tools: 'LLM / Prompt Engineering',
        date: '2026-02-09',
        status: 'Free',
        symbol: 'f(x)',
        cover: 'assets/images/ai-cover-3.jpg',
        file: 'pdf/ai/problem-generator-guide.pdf',
        concept: 'ออกแบบชุด prompt ที่ควบคุมระดับความยาก รูปแบบคำตอบ และการตรวจสอบความถูกต้อง เพื่อให้ครูสร้างแบบฝึกหัดใหม่ได้ในเวลาไม่กี่นาที',
        process: [
          'กำหนดโครงสร้างโจทย์และรูปแบบเฉลยที่ต้องการ',
          'ออกแบบ prompt แบบมีตัวอย่างกำกับ',
          'ทดสอบความถูกต้องกับโจทย์ตัวอย่าง 100 ข้อ',
          'สรุปเป็นคู่มือการใช้งานรูปแบบ PDF'
        ],
        previews: ['assets/previews/problem-generator-1.jpg', 'assets/previews/problem-generator-2.jpg']
      },
      {
        id: 'fractal-gallery',
        title: 'Fractal Gallery',
        description: 'คอลเลกชันภาพแฟร็กทัลจากเซต Mandelbrot และ Julia ในโทนสีร่วมสมัย',
        type: 'AI Generated Artwork',
        tools: 'Generative Art / AI',
        date: '2026-02-20',
        status: 'Free',
        symbol: 'z²+c',
        cover: 'assets/images/ai-cover-4.jpg',
        file: '',
        concept: 'แสดงให้เห็นว่าการวนซ้ำของสูตรอย่างง่าย z → z² + c สามารถสร้างรูปทรงที่ซับซ้อนได้ไม่รู้จบ',
        process: [
          'คำนวณเซต Mandelbrot และ Julia',
          'ออกแบบพาเลตต์สีสำหรับแต่ละภาพ',
          'เรนเดอร์ภาพความละเอียดสูง',
          'คัดเลือกภาพเข้าคอลเลกชัน'
        ],
        previews: ['assets/previews/fractal-1.jpg', 'assets/previews/fractal-2.jpg', 'assets/previews/fractal-3.jpg']
      },
      {
        id: 'math-infographic',
        title: 'Math Infographic Series',
        description: 'อินโฟกราฟิกสรุปสูตรสำคัญระดับมัธยมต้น เหมาะกับการทบทวนก่อนสอบ',
        type: 'Infographic',
        tools: 'AI / Graphic Design',
        date: '2026-03-03',
        status: 'Free',
        symbol: '≡',
        cover: 'assets/images/ai-cover-5.jpg',
        file: 'pdf/ai/math-infographic.pdf',
        concept: 'ย่อเนื้อหาทั้งบทให้อยู่ในหน้าเดียว โดยใช้สีและลำดับสายตาเป็นตัวช่วยจำ',
        process: [
          'คัดเลือกสูตรและแนวคิดหลักของแต่ละบท',
          'วางลำดับข้อมูลและ visual hierarchy',
          'สร้างภาพประกอบด้วย AI',
          'ตรวจทานความถูกต้องทางคณิตศาสตร์'
        ],
        previews: ['assets/previews/infographic-1.jpg', 'assets/previews/infographic-2.jpg']
      },
      {
        id: 'ai-study-planner',
        title: 'AI Study Planner for Math',
        description: 'เทมเพลตวางแผนอ่านหนังสือคณิตศาสตร์รายสัปดาห์ที่ปรับตามเป้าหมายผู้เรียน',
        type: 'AI Tool',
        tools: 'LLM / Productivity',
        date: '2026-03-15',
        status: 'Free',
        symbol: 'Δ',
        cover: 'assets/images/ai-cover-6.jpg',
        file: 'pdf/ai/study-planner.pdf',
        concept: 'ใช้หลักการทบทวนแบบเว้นช่วง (spaced repetition) ผสมกับการประเมินตนเอง เพื่อให้แผนอ่านหนังสือยืดหยุ่นและทำได้จริง',
        process: [
          'สำรวจปัญหาการวางแผนอ่านหนังสือของผู้เรียน',
          'ออกแบบโครงสร้างตารางรายสัปดาห์',
          'ใช้ AI ช่วยสร้างคำแนะนำเฉพาะบุคคล',
          'จัดทำเป็นไฟล์ PDF ที่พิมพ์ใช้ได้ทันที'
        ],
        previews: ['assets/previews/study-planner-1.jpg', 'assets/previews/study-planner-2.jpg']
      }
    ]
  };

  /* ---------------------------------------------------------
     2) ตัวช่วยทั่วไป
     --------------------------------------------------------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name) || '';
  }

  function formatDate(iso) {
    if (!iso) return '—';
    const parts = iso.split('-');
    if (parts.length !== 3) return iso;
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const m = parseInt(parts[1], 10) - 1;
    return parseInt(parts[2], 10) + ' ' + (months[m] || '') + ' ' + (parseInt(parts[0], 10) + 543);
  }

  /* ---------------------------------------------------------
     3) ภาพสำรอง (ใช้เมื่อยังไม่ได้ใส่ไฟล์รูปจริง)
     --------------------------------------------------------- */
  function placeholder(symbol, label) {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#eaf0ff"/><stop offset="100%" stop-color="#e3f7f7"/>' +
      '</linearGradient></defs>' +
      '<rect width="600" height="450" fill="url(#g)"/>' +
      '<g fill="none" stroke="#cdd8f2" stroke-width="1">' +
      '<path d="M0 90h600M0 180h600M0 270h600M0 360h600M100 0v450M200 0v450M300 0v450M400 0v450M500 0v450"/></g>' +
      '<text x="300" y="235" font-family="Georgia,serif" font-size="110" fill="#2f5bea" fill-opacity="0.75" text-anchor="middle">' +
      escapeHtml(symbol || '∑') + '</text>' +
      '<text x="300" y="300" font-family="Arial,sans-serif" font-size="22" fill="#4c5a78" text-anchor="middle">' +
      escapeHtml((label || 'Nadon of Math').substring(0, 34)) + '</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  // error ของ <img> ไม่ bubble จึงดักด้วย capture phase เพียงจุดเดียว
  document.addEventListener('error', function (e) {
    const el = e.target;
    if (!el || el.tagName !== 'IMG' || el.dataset.fallbackApplied) return;
    el.dataset.fallbackApplied = '1';
    el.src = placeholder(el.dataset.symbol, el.dataset.label || el.alt);
  }, true);

  /* ---------------------------------------------------------
     4) Toast
     --------------------------------------------------------- */
  let toastTimer = null;
  function toast(message) {
    const box = $('#toast');
    if (!box) return;
    box.textContent = message;
    box.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => box.classList.remove('is-visible'), 3800);
  }

  /* ---------------------------------------------------------
     5) เมนูมือถือ
     --------------------------------------------------------- */
  function initNav() {
    const toggle = $('#navToggle');
    const nav = $('#siteNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'ปิดเมนูนำทาง' : 'เปิดเมนูนำทาง');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---------------------------------------------------------
     6) Animation ตอนเลื่อนหน้าจอ
     --------------------------------------------------------- */
  function revealOnScroll(scope) {
    const items = $('.reveal', scope || document);
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    items.forEach(el => io.observe(el));
  }

  /* ---------------------------------------------------------
     7) Smooth scroll สำหรับลิงก์ภายในหน้า
     --------------------------------------------------------- */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }

  /* ---------------------------------------------------------
     8) ปุ่มดาวน์โหลด — แจ้งเตือนเมื่อยังไม่มีไฟล์ (กัน 404)
     --------------------------------------------------------- */
  function initDownloadGuard() {
    document.addEventListener('click', function (e) {
      const link = e.target.closest('a[data-download]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') {
        e.preventDefault();
        toast('ยังไม่มีไฟล์สำหรับดาวน์โหลดในรายการนี้');
        return;
      }
      if (location.protocol === 'file:') return; // เปิดจากเครื่องตรง ๆ ให้ผ่าน

      e.preventDefault();
      fetch(href, { method: 'HEAD' })
        .then(function (res) {
          if (res.ok) {
            const tmp = document.createElement('a');
            tmp.href = href;
            tmp.setAttribute('download', '');
            document.body.appendChild(tmp);
            tmp.click();
            document.body.removeChild(tmp);
          } else {
            toast('ยังไม่ได้อัปโหลดไฟล์นี้ — วางไฟล์ไว้ที่ ' + href);
          }
        })
        .catch(function () {
          toast('ไม่สามารถเข้าถึงไฟล์ ' + href + ' ได้ในขณะนี้');
        });
    });
  }

  /* ---------------------------------------------------------
     9) Lightbox
     --------------------------------------------------------- */
  const Lightbox = (function () {
    let images = [];
    let index = 0;
    let lastFocus = null;

    function el() { return $('#lightbox'); }

    function render() {
      const item = images[index];
      if (!item) return;
      const img = $('#lightboxImg');
      img.dataset.fallbackApplied = '';
      img.dataset.symbol = item.symbol || '∑';
      img.dataset.label = item.caption || '';
      img.src = item.src;
      img.alt = item.caption || 'ภาพตัวอย่าง';
      $('#lightboxCaption').textContent =
        (item.caption || '') + ' (' + (index + 1) + '/' + images.length + ')';
    }

    function open(list, startIndex) {
      const box = el();
      if (!box) return;
      images = list;
      index = startIndex || 0;
      lastFocus = document.activeElement;
      box.hidden = false;
      document.body.style.overflow = 'hidden';
      render();
      $('[data-lb-close]', box).focus();
    }

    function close() {
      const box = el();
      if (!box || box.hidden) return;
      box.hidden = true;
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function move(step) {
      if (!images.length) return;
      index = (index + step + images.length) % images.length;
      render();
    }

    function init() {
      const box = el();
      if (!box) return;
      box.addEventListener('click', function (e) {
        if (e.target.closest('[data-lb-close]') || e.target === box) close();
        else if (e.target.closest('[data-lb-prev]')) move(-1);
        else if (e.target.closest('[data-lb-next]')) move(1);
      });
      document.addEventListener('keydown', function (e) {
        if (box.hidden) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') move(-1);
        if (e.key === 'ArrowRight') move(1);
      });
    }

    return { init: init, open: open };
  })();

  function bindPreviews(container, captionBase, symbol) {
    if (!container) return;
    const items = $('.preview', container);
    const list = items.map(function (fig) {
      const img = $('img', fig);
      return { src: img.getAttribute('src'), caption: img.alt, symbol: symbol };
    });
    items.forEach(function (fig, i) {
      fig.setAttribute('role', 'button');
      fig.setAttribute('tabindex', '0');
      fig.setAttribute('aria-label', 'ดูภาพขนาดใหญ่: ' + (captionBase || '') + ' หน้า ' + (i + 1));
      fig.addEventListener('click', function () { Lightbox.open(list, i); });
      fig.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); Lightbox.open(list, i); }
      });
    });
  }

  /* ---------------------------------------------------------
     10) สร้าง Card
     --------------------------------------------------------- */
  function cardImage(src, alt, symbol) {
    return '<img src="' + escapeHtml(src) + '" alt="' + escapeHtml(alt) +
      '" loading="lazy" data-symbol="' + escapeHtml(symbol || '∑') +
      '" data-label="' + escapeHtml(alt) + '">';
  }

  function bookCard(item) {
    const url = 'book-detail.html?id=' + encodeURIComponent(item.id);
    return '' +
      '<article class="card reveal" data-level="' + escapeHtml(item.level) + '">' +
        '<a class="card__media" href="' + url + '" tabindex="-1" aria-hidden="true">' +
          cardImage(item.cover, 'ปกหนังสือ ' + item.title, item.symbol) +
          '<span class="badge badge--free">' + escapeHtml(item.status) + '</span>' +
        '</a>' +
        '<div class="card__body">' +
          '<p class="card__eyebrow">หนังสือ</p>' +
          '<h3 class="card__title"><a href="' + url + '">' + escapeHtml(item.title) + '</a></h3>' +
          '<p class="card__desc">' + escapeHtml(item.description) + '</p>' +
          '<ul class="meta">' +
            '<li>ระดับ ' + escapeHtml(item.level) + '</li>' +
            '<li>' + escapeHtml(item.pages) + ' หน้า</li>' +
          '</ul>' +
        '</div>' +
        '<div class="card__actions">' +
          '<a class="btn btn--ghost" href="' + url + '">ดูรายละเอียด</a>' +
          '<a class="btn btn--solid" href="' + escapeHtml(item.pdf) + '" download data-download ' +
            'aria-label="ดาวน์โหลด PDF ' + escapeHtml(item.title) + '">ดาวน์โหลด PDF</a>' +
        '</div>' +
      '</article>';
  }

  function examCard(item) {
    const url = 'exam-detail.html?id=' + encodeURIComponent(item.id);
    return '' +
      '<article class="card reveal" data-level="' + escapeHtml(item.level) + '" data-difficulty="' + escapeHtml(item.difficulty) + '">' +
        '<a class="card__media" href="' + url + '" tabindex="-1" aria-hidden="true">' +
          cardImage(item.cover, 'ปกชุดข้อสอบ ' + item.title, item.symbol) +
          '<span class="badge badge--free">' + escapeHtml(item.status) + '</span>' +
          '<span class="badge badge--right">' + escapeHtml(item.difficulty) + '</span>' +
        '</a>' +
        '<div class="card__body">' +
          '<p class="card__eyebrow">' + escapeHtml(item.topic) + '</p>' +
          '<h3 class="card__title"><a href="' + url + '">' + escapeHtml(item.title) + '</a></h3>' +
          '<p class="card__desc">' + escapeHtml(item.description) + '</p>' +
          '<ul class="meta">' +
            '<li>ระดับ ' + escapeHtml(item.level) + '</li>' +
            '<li>' + escapeHtml(item.questions) + ' ข้อ</li>' +
            '<li>' + escapeHtml(item.duration) + '</li>' +
          '</ul>' +
        '</div>' +
        '<div class="card__actions">' +
          '<a class="btn btn--ghost" href="' + url + '">ดูรายละเอียด</a>' +
          '<a class="btn btn--solid" href="' + escapeHtml(item.pdf) + '" download data-download ' +
            'aria-label="ดาวน์โหลด PDF ' + escapeHtml(item.title) + '">ดาวน์โหลด PDF</a>' +
        '</div>' +
      '</article>';
  }

  function aiCard(item) {
    const url = 'ai-detail.html?id=' + encodeURIComponent(item.id);
    const download = item.file
      ? '<a class="btn btn--solid" href="' + escapeHtml(item.file) + '" download data-download ' +
        'aria-label="ดาวน์โหลดผลงาน ' + escapeHtml(item.title) + '">ดาวน์โหลด</a>'
      : '';
    return '' +
      '<article class="card reveal" data-type="' + escapeHtml(item.type) + '">' +
        '<a class="card__media" href="' + url + '" tabindex="-1" aria-hidden="true">' +
          cardImage(item.cover, 'ภาพตัวอย่างผลงาน ' + item.title, item.symbol) +
          '<span class="badge badge--free">' + escapeHtml(item.status) + '</span>' +
        '</a>' +
        '<div class="card__body">' +
          '<p class="card__eyebrow">' + escapeHtml(item.type) + '</p>' +
          '<h3 class="card__title"><a href="' + url + '">' + escapeHtml(item.title) + '</a></h3>' +
          '<p class="card__desc">' + escapeHtml(item.description) + '</p>' +
          '<ul class="meta">' +
            '<li>' + escapeHtml(item.tools) + '</li>' +
            '<li>' + escapeHtml(formatDate(item.date)) + '</li>' +
          '</ul>' +
        '</div>' +
        '<div class="card__actions">' +
          '<a class="btn btn--ghost" href="' + url + '">ดูรายละเอียด</a>' + download +
        '</div>' +
      '</article>';
  }

  const RENDERER = { books: bookCard, exams: examCard, ai: aiCard };

  function renderCards(container, items, kind) {
    if (!container) return;
    container.innerHTML = items.map(RENDERER[kind]).join('');
    revealOnScroll(container);
  }

  /* ---------------------------------------------------------
     11) ค้นหา + ตัวกรอง (ทำงานฝั่ง client ทั้งหมด)
     --------------------------------------------------------- */
  function searchableText(item) {
    return [item.title, item.description, item.topic, item.level, item.type, item.tools, item.difficulty,
      (item.topics || []).join(' '), (item.contents || []).join(' ')]
      .filter(Boolean).join(' ').toLowerCase();
  }

  function fillSelect(select, values) {
    if (!select) return;
    values.forEach(function (v) {
      const opt = document.createElement('option');
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });
  }

  function uniqueValues(items, key, order) {
    const set = [];
    items.forEach(function (it) {
      if (it[key] && set.indexOf(it[key]) === -1) set.push(it[key]);
    });
    if (order) {
      set.sort(function (a, b) {
        const ia = order.indexOf(a), ib = order.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      });
    } else {
      set.sort();
    }
    return set;
  }

  function initCatalog(kind) {
    const grid = $('#cardGrid');
    if (!grid) return;

    const items = DATA[kind];
    const searchInput = $('#searchInput');
    const levelSelect = $('#filterLevel');
    const diffSelect = $('#filterDifficulty');
    const typeSelect = $('#filterType');
    const countEl = $('#resultCount');
    const emptyEl = $('#emptyState');
    const resetBtn = $('#resetFilters');

    fillSelect(levelSelect, uniqueValues(items, 'level', ['ม.1', 'ม.2', 'ม.3']));
    fillSelect(diffSelect, uniqueValues(items, 'difficulty', ['ง่าย', 'ปานกลาง', 'ยาก', 'Olympiad']));
    fillSelect(typeSelect, uniqueValues(items, 'type'));

    function apply() {
      const q = (searchInput && searchInput.value || '').trim().toLowerCase();
      const level = levelSelect ? levelSelect.value : '';
      const diff = diffSelect ? diffSelect.value : '';
      const type = typeSelect ? typeSelect.value : '';

      const filtered = items.filter(function (it) {
        if (level && it.level !== level) return false;
        if (diff && it.difficulty !== diff) return false;
        if (type && it.type !== type) return false;
        if (q && searchableText(it).indexOf(q) === -1) return false;
        return true;
      });

      renderCards(grid, filtered, kind);
      if (countEl) countEl.textContent = 'พบทั้งหมด ' + filtered.length + ' รายการ จาก ' + items.length + ' รายการ';
      if (emptyEl) emptyEl.hidden = filtered.length > 0;
    }

    let debounce = null;
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        clearTimeout(debounce);
        debounce = setTimeout(apply, 140);
      });
    }
    [levelSelect, diffSelect, typeSelect].forEach(function (sel) {
      if (sel) sel.addEventListener('change', apply);
    });
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (searchInput) searchInput.value = '';
        [levelSelect, diffSelect, typeSelect].forEach(function (sel) { if (sel) sel.value = ''; });
        apply();
      });
    }

    apply();
  }

  /* ---------------------------------------------------------
     12) หน้าแรก
     --------------------------------------------------------- */
  function initHome() {
    renderCards($('#latestBooks'), DATA.books.slice(0, 4), 'books');
    renderCards($('#latestExams'), DATA.exams.slice(0, 4), 'exams');
    $('[data-stat]').forEach(function (el) {
      const key = el.dataset.stat;
      el.textContent = (DATA[key] || []).length + '+';
    });
  }

  /* ---------------------------------------------------------
     13) หน้ารายละเอียด (ใช้ร่วมกันทั้ง 3 ประเภท)
     --------------------------------------------------------- */
  function setField(name, value) {
    $('[data-field="' + name + '"]').forEach(function (el) { el.textContent = value; });
  }

  function previewMarkup(list, label, symbol) {
    if (!list || !list.length) return '<p class="muted">ยังไม่มีภาพตัวอย่างสำหรับรายการนี้</p>';
    return list.map(function (src, i) {
      return '<figure class="preview">' +
        '<img src="' + escapeHtml(src) + '" alt="ตัวอย่างหน้า ' + (i + 1) + ' ของ ' + escapeHtml(label) +
        '" loading="lazy" data-symbol="' + escapeHtml(symbol || '∑') + '" data-label="หน้า ' + (i + 1) + '">' +
        '</figure>';
    }).join('');
  }

  function setDownload(name, href, label) {
    const el = $('[data-field="' + name + '"]');
    if (!el) return;
    if (href) {
      el.href = href;
      el.hidden = false;
      if (label) el.setAttribute('aria-label', label);
    } else {
      el.hidden = true;
      el.removeAttribute('href');
    }
  }

  function showDetail(found) {
    $('#detailRoot').hidden = !found;
    $('#notFound').hidden = found;
  }

  function initBookDetail() {
    const id = getParam('id') || DATA.books[0].id;
    const item = DATA.books.filter(b => b.id === id)[0];
    if (!item) { showDetail(false); return; }
    showDetail(true);
    document.title = item.title + ' — Nadon of Math';

    setField('title', item.title);
    setField('description', item.description);
    setField('author', item.author);
    setField('level', item.level);
    setField('pages', item.pages + ' หน้า');
    setField('status', item.status);

    const cover = $('[data-field="cover"]');
    cover.dataset.symbol = item.symbol;
    cover.dataset.label = item.title;
    cover.alt = 'ปกหนังสือ ' + item.title;
    cover.src = item.cover;

    $('[data-field="contents"]').innerHTML =
      item.contents.map(c => '<li>' + escapeHtml(c) + '</li>').join('');

    const prev = $('[data-field="previews"]');
    prev.innerHTML = previewMarkup(item.previews, item.title, item.symbol);
    bindPreviews(prev, item.title, item.symbol);

    setDownload('pdf', item.pdf, 'ดาวน์โหลด PDF ' + item.title);
    renderCards($('[data-field="related"]'), DATA.books.filter(b => b.id !== item.id).slice(0, 3), 'books');
  }

  function initExamDetail() {
    const id = getParam('id') || DATA.exams[0].id;
    const item = DATA.exams.filter(x => x.id === id)[0];
    if (!item) { showDetail(false); return; }
    showDetail(true);
    document.title = item.title + ' — Nadon of Math';

    setField('title', item.title);
    setField('description', item.description);
    setField('topic', item.topic);
    setField('level', item.level);
    setField('questions', item.questions + ' ข้อ');
    setField('difficulty', item.difficulty);
    setField('duration', item.duration);
    setField('status', item.status);

    const cover = $('[data-field="cover"]');
    cover.dataset.symbol = item.symbol;
    cover.dataset.label = item.title;
    cover.alt = 'ปกชุดข้อสอบ ' + item.title;
    cover.src = item.cover;

    $('[data-field="topics"]').innerHTML = item.topics.map(t => '<li>' + escapeHtml(t) + '</li>').join('');
    $('[data-field="samples"]').innerHTML = item.samples.map(s => '<li>' + escapeHtml(s) + '</li>').join('');

    const prev = $('[data-field="previews"]');
    prev.innerHTML = previewMarkup(item.previews, item.title, item.symbol);
    bindPreviews(prev, item.title, item.symbol);

    setDownload('pdf', item.pdf, 'ดาวน์โหลดข้อสอบ ' + item.title);
    setDownload('solution', item.solution, 'ดาวน์โหลดเฉลย ' + item.title);
    renderCards($('[data-field="related"]'), DATA.exams.filter(x => x.id !== item.id).slice(0, 3), 'exams');
  }

  function initAiDetail() {
    const id = getParam('id') || DATA.ai[0].id;
    const item = DATA.ai.filter(x => x.id === id)[0];
    if (!item) { showDetail(false); return; }
    showDetail(true);
    document.title = item.title + ' — Nadon of Math';

    setField('title', item.title);
    setField('description', item.description);
    setField('type', item.type);
    setField('tools', item.tools);
    setField('date', formatDate(item.date));
    setField('status', item.status);
    setField('concept', item.concept);

    const cover = $('[data-field="cover"]');
    cover.dataset.symbol = item.symbol;
    cover.dataset.label = item.title;
    cover.alt = 'ผลงาน ' + item.title;
    cover.src = item.cover;

    $('[data-field="process"]').innerHTML = item.process.map(p => '<li>' + escapeHtml(p) + '</li>').join('');

    const prev = $('[data-field="previews"]');
    prev.innerHTML = previewMarkup(item.previews, item.title, item.symbol);
    bindPreviews(prev, item.title, item.symbol);

    setDownload('file', item.file, 'ดาวน์โหลดผลงาน ' + item.title);
    renderCards($('[data-field="related"]'), DATA.ai.filter(x => x.id !== item.id).slice(0, 3), 'ai');
  }

  /* ---------------------------------------------------------
     14) จุดเริ่มต้น
     --------------------------------------------------------- */
  function init() {
    initNav();
    initSmoothScroll();
    initDownloadGuard();
    Lightbox.init();

    const page = document.body.dataset.page;
    switch (page) {
      case 'home': initHome(); break;
      case 'books': initCatalog('books'); break;
      case 'exams': initCatalog('exams'); break;
      case 'ai': initCatalog('ai'); break;
      case 'book-detail': initBookDetail(); break;
      case 'exam-detail': initExamDetail(); break;
      case 'ai-detail': initAiDetail(); break;
      default: break;
    }

    revealOnScroll(document);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // เปิดให้เรียกใช้จาก console ได้ เผื่อต้องดีบักข้อมูล
  window.NadonOfMath = { data: DATA };
})();