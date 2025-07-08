import swinburne from '../assets/swinburne.svg'
import jlpt from '../assets/jlpt.svg'
import tefl from '../assets/tefl.svg'

const certification = {
    en: [
        {
            id: 1,
            accreditation: "Bachelor of ICT (Software)",
            association: "Swinburne University of Technology",
            thumbnail: swinburne,
            desc: "Acquired knowledge in front-end and mobile app development, database design, networking, DevOps, data structures and logic, and UI/UX design.",
            link: "https://www.swinburne.edu.au/",
            progress: 100,
            compDate: "2020"
        },
        {
            id: 2,
            accreditation: "Advanced Diploma (Network Security & Design)",
            association: "Swinburne TAFE",
            thumbnail: swinburne,
            desc: "Studied network administration, virtual infrastructure, network security, Windows Server insfrastucture, and CCNA networking modules.",
            link: "https://www.swinburne.edu.au/",
            progress: 100,
            compDate: "2015"
        },
        {
            id: 3,
            accreditation: "JLPT N3 Certification (日本語能力試験)",
            association: "The Japan Foundation & J.E.E.S.",
            thumbnail: jlpt,
            desc: "Obtained full working-proficiency Japanese.",
            link: "https://www.jlpt.jp/",
            progress: 100,
            compDate: "2020"
        },
        {
            id: 4,
            accreditation: "TEFL Certification",
            association: "The TEFL Org",
            thumbnail: tefl,
            desc: "Teaching English as a Foreign Language. Covered effective classroom management, tailored lesson planning, teaching methodologies and language learning approaches.",
            link: "https://www.tefl.org/",
            progress: 60,
            compDate: ""
        }
    ], 
    ja: [
        {
            id: 1,
            accreditation: "ICT学士（ソフトウェア）",
            association: "スウィンバーン工科大学",
            thumbnail: swinburne,
            desc: "フロントエンドおよびモバイルアプリ開発、データベース設計、ネットワーキング、DevOps、データ構造と論理、UI/UXデザインに関する知識を習得。",
            link: "https://www.swinburne.edu.au/",
            progress: 100,
            compDate: "2020"
        },
        {
            id: 2,
            accreditation: "高度ディプロマ（ネットワークセキュリティ＆設計）",
            association: "スウィンバーンTAFE",
            thumbnail: swinburne,
            desc: "ネットワーク管理、仮想インフラ、ネットワークセキュリティ、Windows Serverインフラ、CCNAネットワークモジュールを学習。",
            link: "https://www.swinburne.edu.au/",
            progress: 100,
            compDate: "2015"
        },
        {
            id: 3,
            accreditation: "JLPT N3認定（日本語能力試験）",
            association: "国際交流基金・日本国際教育支援協会（J.E.E.S.）",
            thumbnail: jlpt,
            desc: "業務レベルでの日本語運用能力を取得。",
            link: "https://www.jlpt.jp/",
            progress: 100,
            compDate: "2020"
        },
        {
            id: 4,
            accreditation: "TEFL認定（英語教授法）",
            association: "TEFL Org",
            thumbnail: tefl,
            desc: "外国語としての英語教授法を学習。効果的なクラス管理、個別に対応したレッスンプラン、指導法、言語習得アプローチを習得。",
            link: "https://www.tefl.org/",
            progress: 60,
            compDate: ""
        }
    ]
}

export default certification