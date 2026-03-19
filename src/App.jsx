import "./App.css";
import {
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Users,
  Lock,
  ArrowRight,
  Bot,
  HeartHandshake,
} from "lucide-react";

function App() {
  const inviteLink = "https://discord.gg/sEYh5F95dQ";

  const features = [
    {
      icon: <MessageCircleHeart size={26} />,
      title: "자유로운 대화",
      desc: "말하기 어려웠던 고민부터 그냥 흘려보내고 싶지 않은 하루의 감정까지, 편하게 나눌 수 있어요.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "1:1 비공개 상담",
      desc: "상담 신청 시 비공개 상담방이 생성되어 내담자, 상담사, 관리자만 안전하게 대화할 수 있어요.",
    },
    {
      icon: <Users size={26} />,
      title: "작고 따뜻한 커뮤니티",
      desc: "너무 빠르게 지나가는 서버보다 서로의 이야기를 조금 더 진심으로 듣는 분위기를 지향해요.",
    },
  ];

  const audience = [
    "혼자 고민을 안고 있기 버거운 분",
    "너무 큰 서버보다 조용한 공간을 원하는 분",
    "필요할 때 안전하게 상담받고 싶은 분",
  ];

  const trust = [
    {
      icon: <Lock size={20} />,
      text: "상담 채널은 비공개로 운영돼요.",
    },
    {
      icon: <HeartHandshake size={20} />,
      text: "내담자 · 상담사 · 관리자만 볼 수 있어요.",
    },
    {
      icon: <Bot size={20} />,
      text: "상담방 생성과 종료가 자동화되어 있어요.",
    },
  ];

  const steps = [
    "디스코드 서버에 입장해요.",
    "서버 소개와 규칙을 가볍게 확인해요.",
    "자유롭게 대화하거나 상담을 신청해요.",
    "필요할 때 비공개 공간에서 더 편하게 이야기를 나눠요.",
  ];

  return (
    <main className="app">
      <div className="bg-orb orb1"></div>
      <div className="bg-orb orb2"></div>
      <div className="bg-orb orb3"></div>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left fade-up">
            <div className="badge">
              <Sparkles size={16} />
              <span>고민을 나눠요</span>
            </div>

            <h1 className="hero-title">
              혼자 버티지 않아도 되는
              <span>작고 따뜻한 공간</span>
            </h1>

            <p className="hero-desc">
              누군가에게 말하기 어려웠던 고민, 그냥 털어놓고 싶은 이야기,
              힘든 하루의 감정들까지. 부담 없이 들어와 대화하고,
              필요할 때는 비공개 상담방에서 더 편하게 이야기를 나눌 수 있어요.
            </p>

            <div className="hero-buttons">
              <a href={inviteLink} className="btn btn-primary">
                디스코드 입장하기
                <ArrowRight size={18} />
              </a>

              <a href="#about" className="btn btn-secondary">
                어떤 공간인지 보기
              </a>
            </div>

            <div className="hero-tags">
              <span>🌿 자유로운 이야기</span>
              <span>🔒 비공개 상담방</span>
              <span>🤍 소규모 커뮤니티</span>
            </div>
          </div>

          <div className="hero-right fade-up delay-1">
            <div className="preview-card">
              <div className="preview-header">
                <div>
                  <div className="preview-sub">서버 미리보기</div>
                  <div className="preview-title">고민을 나눠요</div>
                </div>
                <div className="preview-pill">안전한 공간</div>
              </div>

              <div className="preview-box green">
                <div className="preview-box-title"># 서버 소개</div>
                <p>
                  혼자 고민하지 않아도 되는 작은 공간이에요.
                  편하게 이야기하고, 필요할 때는 조용히 상담받을 수 있어요.
                </p>
              </div>

              <div className="preview-grid">
                <div className="preview-box gray">
                  <div className="preview-box-title">자유 채팅</div>
                  <p>일상, 고민, 생각을 부담 없이 나눌 수 있어요.</p>
                </div>

                <div className="preview-box gray">
                  <div className="preview-box-title">상담 신청</div>
                  <p>신청 시 비공개 공간이 자동으로 열려요.</p>
                </div>
              </div>

              <div className="preview-box dark">
                <div className="preview-box-title light">따뜻한 한마디</div>
                <p>
                  혼자 버티지 않아도 괜찮아요.
                  당신의 이야기를 편하게 꺼낼 수 있는 공간이 되었으면 좋겠어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-head fade-up">
            <h2>이런 공간이에요</h2>
            <p>
              누군가를 평가하는 곳이 아니라, 서로의 이야기를 조금 더 따뜻하게
              들어주는 공간을 만들고 싶었어요.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((item, index) => (
              <div
                className={`feature-card fade-up delay-${index + 1}`}
                key={item.title}
              >
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-small">
        <div className="container two-grid">
          <div className="panel fade-up">
            <h3>이런 분들에게 어울려요</h3>
            <div className="audience-list">
              {audience.map((item) => (
                <div className="audience-item" key={item}>
                  🤍 {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel panel-green fade-up delay-1">
            <h3>안심하고 이야기할 수 있도록</h3>
            <div className="trust-list">
              {trust.map((item) => (
                <div className="trust-item" key={item.text}>
                  <div className="trust-icon">{item.icon}</div>
                  <div>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-small">
        <div className="container step-grid">
          <div className="panel fade-up">
            <h3>이용 방법</h3>
            <div className="step-list">
              {steps.map((step, index) => (
                <div className="step-item" key={step}>
                  <div className="step-number">{index + 1}</div>
                  <div className="step-text">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel panel-soft fade-up delay-1">
            <h3>작은 커뮤니티의 장점</h3>
            <p className="soft-desc">
              사람이 너무 많아서 금방 묻히는 공간보다,
              조금 더 차분하게 서로의 이야기를 나누고 싶은 분들에게 잘 맞아요.
            </p>

            <div className="soft-box">
              <div className="soft-box-title">운영 포인트</div>
              <p>
                자유채팅과 상담 기능이 함께 있어,
                가볍게 머물 수도 있고 정말 필요한 순간에는 더 깊게 도움을 요청할 수도 있어요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card fade-up">
            <div className="cta-icon">
              <MessageCircleHeart size={28} />
            </div>
            <h2>혼자 버티지 않아도 괜찮아요</h2>
            <p>
              작은 고민도, 무거운 하루도, 여기서는 조금 덜 혼자였으면 합니다.
              편하게 들어와 둘러보고, 마음이 괜찮은 만큼 천천히 이야기를 나눠보세요.
            </p>

            <a href={inviteLink} className="btn btn-dark">
              지금 입장하기
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;