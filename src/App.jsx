import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Coffee,
  DoorOpen,
  Heart,
  HeartHandshake,
  MessageCircle,
  MessagesSquare,
  Mic,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Users,
} from "lucide-react";

const DISCORD_INVITE_URL = "https://discord.gg/B5dq2K2JTq";

const recommendations = [
  "편하게 이야기할 친구가 필요한 분",
  "고민을 들어주고 나누고 싶은 분",
  "따뜻한 분위기의 친목 서버를 찾는 분",
  "과한 친목보다 서로 존중하는 공간을 원하는 분",
];

const activities = [
  { title: "일상 잡담", icon: <MessagesSquare aria-hidden="true" size={23} /> },
  { title: "고민 나누기", icon: <HeartHandshake aria-hidden="true" size={23} /> },
  { title: "친구 만들기", icon: <Users aria-hidden="true" size={23} /> },
  { title: "음성 채팅", icon: <Mic aria-hidden="true" size={23} /> },
  { title: "월간 이벤트", icon: <CalendarDays aria-hidden="true" size={23} /> },
  { title: "따뜻한 환영", icon: <SmilePlus aria-hidden="true" size={23} /> },
];

const rules = [
  "욕설, 조롱, 비방 금지",
  "성희롱 및 불쾌한 발언 금지",
  "과도한 DM, 집착, 연애 강요 금지",
  "고민을 빌미로 한 압박 금지",
  "분쟁 발생 시 관리자 판단에 따라 조치",
  "모두에게 동일한 규칙 적용",
];

function InviteButton({ children = "디스코드 서버 입장하기", variant = "primary" }) {
  const variantClass =
    variant === "light"
      ? "bg-white text-slate-800 shadow-[0_14px_34px_rgba(49,70,90,0.14)] hover:bg-[#fff7ef] focus-visible:outline-[#364b6b]"
      : "bg-[#5d7c74] text-white shadow-[0_16px_36px_rgba(64,101,91,0.22)] hover:bg-[#4c6c64] focus-visible:outline-[#5d7c74]";

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variantClass}`}
      href={DISCORD_INVITE_URL}
      aria-label="고민을 나눠요 디스코드 서버 입장하기"
    >
      {children}
      <ArrowRight aria-hidden="true" size={19} strokeWidth={2.4} />
    </a>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold text-[#5d7c74]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-lg leading-8 text-slate-600">{children}</p>
      ) : null}
    </div>
  );
}

function SoftCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-lg border border-white/80 bg-white/85 p-6 shadow-[0_18px_42px_rgba(78,89,109,0.10)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf0] text-slate-800">
      <section
        className="relative flex min-h-[700px] items-center bg-cover bg-center py-16 sm:min-h-[720px] lg:min-h-[78dvh]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,250,240,0.96) 0%, rgba(255,250,240,0.86) 41%, rgba(255,250,240,0.46) 67%, rgba(255,250,240,0.28) 100%), url('/community-hero.png')",
        }}
      >
        <div className="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6ece3] bg-white/80 px-4 py-2 text-sm font-bold text-[#4c6c64] shadow-[0_10px_26px_rgba(79,101,93,0.10)]">
              <Sparkles aria-hidden="true" size={16} />
              현재 90명 이상 함께하는 중
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.15] text-slate-950 sm:text-5xl lg:text-6xl">
              혼자 담아두기 힘든 고민이 있다면
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-9 text-slate-700 sm:text-xl">
              고민을 나눠요는 일상, 고민, 잡담을 편하게 나누는 따뜻한
              디스코드 커뮤니티입니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <InviteButton />
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d6ece3] bg-white/75 px-5 py-3 text-base font-bold text-slate-700 shadow-[0_12px_28px_rgba(78,89,109,0.10)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5d7c74]"
                href="#rules"
              >
                규칙 먼저 보기
                <ShieldCheck aria-hidden="true" size={18} />
              </a>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 text-base font-bold text-[#4f635e]">
              <BadgeCheck aria-hidden="true" size={19} />
              서로 존중하는 대화를 지향합니다.
            </p>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </section>

      <section className="bg-[#f8fff9] py-16 sm:py-20">
        <div className="mx-auto w-[min(1120px,calc(100%_-_32px))]">
          <SectionHeader title="고민을 나눠요는 어떤 곳인가요?">
            고민을 나눠요는 혼자 끙끙 앓던 고민을 가볍게 나누고,
            평범한 일상도 함께 이야기할 수 있는 디스코드 커뮤니티입니다.
            누군가의 이야기를 들어주고, 때로는 내 이야기도 편하게 꺼낼 수
            있는 따뜻한 공간을 목표로 합니다.
          </SectionHeader>

          <div className="grid gap-4 md:grid-cols-3">
            <SoftCard>
              <MessageCircle className="mb-5 text-[#5d7c74]" aria-hidden="true" />
              <h3 className="text-xl font-black text-slate-900">가벼운 대화부터</h3>
              <p className="mt-3 leading-8 text-slate-600">
                하루 이야기도, 별일 아닌 잡담도 편하게 꺼낼 수 있어요.
              </p>
            </SoftCard>
            <SoftCard>
              <Heart className="mb-5 text-[#cf7f83]" aria-hidden="true" />
              <h3 className="text-xl font-black text-slate-900">부담 없는 고민까지</h3>
              <p className="mt-3 leading-8 text-slate-600">
                정답을 강요하기보다 서로의 이야기를 차분히 들어주는 분위기를
                지향해요.
              </p>
            </SoftCard>
            <SoftCard>
              <Coffee className="mb-5 text-[#8d7358]" aria-hidden="true" />
              <h3 className="text-xl font-black text-slate-900">쉬어가는 공간처럼</h3>
              <p className="mt-3 leading-8 text-slate-600">
                너무 무겁지 않게, 편한 속도로 머물 수 있는 커뮤니티를 만들고
                있어요.
              </p>
            </SoftCard>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-16 sm:py-20">
        <div className="mx-auto w-[min(1120px,calc(100%_-_32px))]">
          <SectionHeader eyebrow="추천 대상" title="이런 분께 추천해요" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recommendations.map((item) => (
              <SoftCard key={item} className="bg-white">
                <CheckCircle2 className="mb-5 text-[#5d7c74]" aria-hidden="true" />
                <p className="text-lg font-black leading-8 text-slate-900">{item}</p>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eff9fb] py-16 sm:py-20">
        <div className="mx-auto w-[min(1120px,calc(100%_-_32px))]">
          <SectionHeader eyebrow="서버 활동" title="서버에서 할 수 있는 것" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map(({ title, icon }) => (
              <SoftCard
                key={title}
                className="flex items-center gap-4 bg-white/90 p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e3f3ed] text-[#4c6c64]">
                  {icon}
                </div>
                <h3 className="text-xl font-black text-slate-900">{title}</h3>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="bg-[#f9fbf3] py-16 sm:py-20">
        <div className="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold text-[#5d7c74]">안전한 서버 운영</p>
            <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              편안한 공간을 위해 규칙을 지켜요
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              누구나 편하게 머물 수 있도록 관리자가 서버 분위기를 살피고
              있습니다.
            </p>
          </div>

          <SoftCard className="border-[#cfe8dd] bg-white">
            <div className="mb-5 flex items-center gap-3 rounded-lg bg-[#edf8f3] p-4 text-[#3f6259]">
              <ShieldCheck aria-hidden="true" size={24} />
              <p className="font-black">모두에게 같은 기준으로 적용됩니다.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {rules.map((rule) => (
                <div
                  className="flex items-start gap-3 rounded-lg border border-[#edf2ef] bg-[#fcfffd] p-4"
                  key={rule}
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#5d7c74]"
                    aria-hidden="true"
                    size={18}
                  />
                  <p className="font-bold leading-7 text-slate-700">{rule}</p>
                </div>
              ))}
            </div>
          </SoftCard>
        </div>
      </section>

      <section className="bg-[#fff7f3] py-16 sm:py-20">
        <div className="mx-auto grid w-[min(1120px,calc(100%_-_32px))] gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SoftCard className="bg-white">
            <DoorOpen className="mb-5 text-[#cf7f83]" aria-hidden="true" size={30} />
            <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              처음 오셔도 괜찮아요
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              처음 들어오신 분들도 천천히 적응할 수 있도록 환영 채널과 안내
              채널이 준비되어 있습니다. 부담 없이 인사하고, 편한 속도로 함께해
              주세요.
            </p>
          </SoftCard>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <SoftCard className="bg-[#f2fbf7]">
              <h3 className="text-xl font-black text-slate-900">천천히 둘러보기</h3>
              <p className="mt-3 leading-8 text-slate-600">
                바로 말하지 않아도 괜찮아요. 분위기를 살피며 편하게 적응할 수
                있어요.
              </p>
            </SoftCard>
            <SoftCard className="bg-[#f3f8ff]">
              <h3 className="text-xl font-black text-slate-900">필요한 만큼 참여하기</h3>
              <p className="mt-3 leading-8 text-slate-600">
                가벼운 인사, 일상 대화, 고민 나눔까지 원하는 방식으로 함께해요.
              </p>
            </SoftCard>
          </div>
        </div>
      </section>

      <section className="bg-[#f2fbf7] py-16 sm:py-20">
        <div className="mx-auto w-[min(960px,calc(100%_-_32px))] text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-white text-[#5d7c74] shadow-[0_14px_34px_rgba(78,89,109,0.10)]">
            <MessageCircle aria-hidden="true" size={28} />
          </div>
          <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
            오늘, 당신의 이야기를 나눠보세요
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-slate-600">
            가벼운 잡담도, 작은 고민도 괜찮아요. 고민을 나눠요에서 함께
            이야기해요.
          </p>
          <div className="mt-8 flex justify-center">
            <InviteButton variant="light" />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e7eee9] bg-[#fffaf0] px-4 py-8 text-center text-sm font-bold text-slate-500">
        고민을 나눠요 · 서로 존중하는 따뜻한 디스코드 커뮤니티
      </footer>
    </main>
  );
}

export default App;
