import Saglikliyasam from '../lib/getSaglikliyasam'
import Layout from '../components/layout';

export async function getStaticProps() {
  const posts = await Saglikliyasam();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({posts}) {
  return (
    <Layout>

      <main>
          {posts.map(post =>(
            <div key={post.id}>
              <div><p>Kaç doğum yaptınız?:</p><p>{post.fields.dogum_sayisi}</p></div>
              <div><p>Boy:</p><p>{post.fields.boy}</p></div>
              <div><p>Kronik hastalığınız var mı?:</p><p>{post.fields.kronik_hastalik}</p></div>
              <div><p>Burun akıntısı ve balgam sorununuz var mı?:</p><p>{post.fields.burun_balgam}</p></div>
              <div><p>Kullandığınız baharat ve bitki çayları?: </p><p>{post.fields.baharat_bitki_icecekleri}</p></div>
              <div><p>Medeni Durumunuz: </p><p>{post.fields.medeni_durum}</p></div>
              <div><p>Vesveseli takıntılı evhamlı mısınız?:</p><p>{post.fields.vesvese}</p></div>
              <div><p>Anne sütü kullandınız mı? Süresi nekadar?:</p><p>{post.fields.anne_sutu}</p></div>
              <div><p>Bundan sonraki eğitimlerimizden haberdar olmak istermisiniz?:</p><p>{post.fields.bundan_sonraki_egitim}</p></div>
              <div><p>Kabızlık var mı? / Sıklığı / Tam rahatlıyor mu?: </p><p>{post.fields.kabizlik}</p></div>
              <div><p>Saçlarınız dökülüyor mu?: </p><p>{post.fields.sac_dokulmesi}</p></div>
              <div><p>Beslenme Şekliniz: </p><p>{post.fields.beslenme_sekli}</p></div>
              <div><p>Doğum yapma şekliniz?: </p><p>{post.fields.dogum_yapma_sekli}</p></div>
              <div><p>Eklemek istediğiniz rahatsızlıklarınız var mı?:</p><p>{post.fields.eklenen_hastalik}</p></div>
              <div><p>İnsülin direnciniz var mı?:</p><p>{post.fields.insilun_direnci}</p></div>
              <div><p>Vücudunuz da sivilceler hangi bölgelerinizde çıkar:</p><p>{post.fields.sivilce_nerede}</p></div>
              <div><p>Kistiniz var mı?:</p><p>{post.fields.kist}</p></div>
              <div><p>Sabahları yorgun uyanır mısınız?:</p><p>{post.fields.sabah_yorgun}</p></div>
              <div><p>Gözlük kullanıyormusunuz?: </p><p>{post.fields.gozluk_durumu}</p></div>
              <div><p>Tansiyon durumunuz nasıl?: </p><p>{post.fields.tansiyon}</p></div>
              <div><p>yas:</p><p>{post.fields.yas}</p></div>
              <div><p>Uyandığında ağız tadınız nasıl?: </p><p>{post.fields.uyandiginda_agiz_tadi}</p></div>
              <div><p>Yaşadığınız İl:</p><p>{post.fields.yasadigi_il}</p></div>
              <div><p>Kan Grubunuz:</p><p>{post.fields.kan_gurubu}</p></div>
              <div><p>Sürekli kullandığınız ilaç var mı?:</p><p>{post.fields.surekli_kullandigi_ilac}</p></div>
              <div><p>Sabahları uyandığınızda salyanız yastığa akmış olur mu?</p><p>{post.fields.salya}</p></div>
              <div><p>Uyku düzeniniz nasıldı?: </p><p>{post.fields.uyku_duzeni}</p></div>
              <div><p>Eşinizle hangi sıklıkla birlikte oluyorsunuz?: </p><p>{post.fields.iliski}</p></div>
              <div><p>Çabuk parlayan biri misiniz?: </p><p>{post.fields.parlama_durumu}</p></div>
              <div><p>Kas yapısı nasıl?:</p><p>{post.fields.kas_yapisi}</p></div>
              <div><p>Hayatınızda hiç ani, acı veya duygusal çöküntü (travma) yaşadınız mı? : </p><p>{post.fields.travma_durumu}</p></div>
              <div><p>Günlük su tüketiminiz?: </p><p>{post.fields.gunluk_su}</p></div>
              <div><p>Eliniz ayağınız üşür mü?:</p><p>{post.fields.el_ayak}</p></div>
              <div><p>Anne Babası nasıldı?: </p><p>{post.fields.anne_baba_durumu}</p></div>
              <div><p>Sigara Kullanıyormusunuz?: </p><p>{post.fields.sigara}</p></div>
              <div><p>Hormonal bir sıkıntınız var mı?: </p><p>{post.fields.hormonal_sikinti}</p></div>
              <div><p>Doğduğunuz Mevsim: </p><p>{post.fields.dogum_mevsimi}</p></div>
              <div><p>Kansızlık hikayeniz var mı?: </p><p>{post.fields.kansizlik}</p></div>
              <div><p>Alerjik Durumu: </p><p>{post.fields.alerjik_durum}</p></div>
              <div><p>Saç şekliniz nasıl?:</p><p>{post.fields.sac_sekli}</p></div>
              <div><p>adres:</p><p>{post.fields.adres}</p></div>
              <div><p>kilonuz:</p><p>{post.fields.kilonuz}</p></div>
              <div><p>Diş ve dişeti probleminiz var mı?: </p><p>{post.fields.dis_problemi}</p></div>
              <div><p>Mesleğiniz: </p><p>{post.fields.meslegi}</p></div>
              <div><p>Doğduğunuz Saat: </p><p>{post.fields.dogumsaati}</p></div>
              <div><p>Vücudunuz da gaz var mı?: </p><p>{post.fields.vucud_gazi}</p></div>
              <div><p>Varis probleminiz var mı?: </p><p>{post.fields.varis}</p></div>
              <div><p>Cildinizde kaşıntı, döküntü var mı?:</p><p>{post.fields.ciltte_kasinti}</p></div>
              <div><p>Tiroidinizin çalışma durumu nedir?: </p><p>{post.fields.tirioid}</p></div>
              <div><p>Göz beyazınızın rengi nasıl?: </p><p>{post.fields.goz_beyazi}</p></div>
              <div><p>Gözlük ereceniz nedir?: </p><p>{post.fields.gozluk_derecesi}</p></div>
              <div><p>Adetleriniz düzenli mi? Ağrılı mı?: </p><p>{post.fields.adet_duzeni}</p></div>
              <div><p>Sağlıklı yaşam programına ilk defamı katılıyorsunuz?: </p><p>{post.fields.programa_katilma_durumu}</p></div>
              <div><p>Dilinizin üzerindeki tabakanın rengi nasıl?: </p><p>{post.fields.dil_rengi}</p></div>
              <div><p>Bu programdan beklentileriniz nelerdir?:</p><p>{post.fields.program_beklentisi}</p></div>
              <div><p>Daha önce kaç defa programa katıldınız?:</p><p>{post.fields.pograma_kac_defa_katildi}</p></div>
              <div><p>Vajinal akıntı, mantar veya kaşıntı var mı?:</p><p>{post.fields.vajinal_akinti}</p></div>
              <div><p>telefon: </p><p>{post.fields.telefon}</p></div>
              <div><p>ad_soyad: </p><p>{post.fields.ad_soyad}</p></div>
              <div><p>Hareketli hantal olup olmama durumu?:</p><p>{post.fields.hareket_hantal}</p></div>
              <div><p>eposta:</p><p>{post.fields.eposta}</p></div>
              <div><p>Unutkanlık var mı?:</p><p>{post.fields.unutkanlik}</p></div>
              <div><p>Daha önce hacamat yaptırdınız mı?: </p><p>{post.fields.hacamat}</p></div>
              <div><p>cinsiyet: </p><p>{post.fields.cinsiyet}</p></div>
              <div><p>Günlük hayatta çoğunlukla kendinizi nasıl hissediyorsunuz?:</p><p>{post.fields.gunluk_hayatta_nasil}</p></div>
              <div><p>Ameliyat geçirdiniz mi?: </p><p>{post.fields.ameliyat_durumu}</p></div>
              <div><p>Sülük yaptırdınız mı?: </p><p>{post.fields.suluk}</p></div>
              <div><p>Çocukluğunda beden şekli?: </p><p>{post.fields.cocuk_beden_sekli}</p></div>
              <div><p>O. oluyor musunuz?:</p><p>{post.fields.orgasm}</p></div>
              <div><p>Vücudunuzda sivilce çıkıyor mu?: </p><p>{post.fields.sivilce}</p></div>
              <div><p>Dilininiz durumu nasıl?:</p><p>{post.fields.dilin_durumu}</p></div>
              <div><p>Sabah uyandığında belinde çizgı̇ şeklinde bir ağrı oluyor mu ve tuvalete gidip dolaştığın da azalıyor mu?: </p><p>{post.fields.sabah_uyandigin_beldeki_cizgi}</p></div>
            </div>
          ))}
      </main>

    </Layout>
  )
}