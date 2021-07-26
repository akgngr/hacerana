import react from 'react';
import Layout from '../../components/layout';
import {getRecordById} from '../../lib/getSaglikliyasam'
import Saglikliyasam from '../../lib/getSaglikliyasam'
import Link from "next/link"

export const getStaticPaths = async () => {
    const posts = await Saglikliyasam();

    const paths = posts.map((post) => ({
        params: { id: post.id },
    }))

    return { paths, fallback: false }

};

export async function getStaticProps({ params }) {

    const post = await getRecordById(process.env.AIRTABLE_TABLE_NAME, params.id)

    // Pass post data to the page via props
    return { props: { post }, revalidate: 1, }
  }

export default function Show({post}){
    
    return(

        <Layout>
            <div className="d-flex position-fixed top-0 end-0 pt-5 flex-column mt-5">
                <Link href="/">
                    <a className="btn btn-success float-end mt-2">Listeye Dön</a>
                </Link>
                <button className="btn btn-default pt-3" onClick={() => window.print()}>Yazdır</button>
            </div>
            <div id="yazdir" className="small" key={post.id}>
            <h5>Sağlıklı Yaşam Formu -- {post.fields.ad_soyad}</h5>
                <div className="row">
                    <div className="col">
                        <div><span className="fw-bolder ">Ad, Soyad: </span><span>{post.fields.ad_soyad}</span></div>
                        <div><span className="fw-bolder">Telefon No: </span><span>{post.fields.telefon}</span></div>
                        <div><span className="fw-bolder">Meslek: </span><span>{post.fields.meslegi}</span></div>
                        <div><span className="fw-bolder">Yaşadığı İl:</span><span>{post.fields.yasadigi_il}</span></div>
                    </div>
                    <div className="col">
                        <div><span className="fw-bolder">Cinsiyet: </span><span>{post.fields.cinsiyet}</span></div>
                        <div><span className="fw-bolder">Kilo:</span><span>{post.fields.kilonuz}</span></div>
                        <div><span className="fw-bolder">Boy:</span><span>{post.fields.boy}</span></div>
                        <div><span className="fw-bolder">Kan Grubu:</span><span>{post.fields.kan_gurubu}</span></div>
                    </div>
                    <div className="col">
                        <div><span className="fw-bolder">Yaşı:</span><span>{post.fields.yas}</span></div>
                        <div><span className="fw-bolder">Medeni Durumu: </span><span>{post.fields.medeni_durum}</span></div>
                        <div><span className="fw-bolder">Doğduğu Mevsim: </span><span>{post.fields.dogum_mevsimi}</span></div>
                        <div><span className="fw-bolder">Doğduğu Saat: </span><span>{post.fields.dogumsaati}</span></div>
                    </div>
                </div>

                <div className="pb-3"><span className="fw-bolder">Adresi:</span><span>{post.fields.adres}</span></div>
              
                <div className="row pb-3">
                    <div className="col">
                        <div><span className="fw-bolder">Anne sütü kullandınız mı?:</span><span>{post.fields.anne_sutu}</span></div>
                        <div><span className="fw-bolder">Kronik hastalığınız var mı?:</span><span>{post.fields.kronik_hastalik}</span></div>
                        <div><span className="fw-bolder">Kabızlık durumu: </span><span>{post.fields.kabizlik}</span></div>
                        <div><span className="fw-bolder">Saçlarınız dökülüyor mu?: </span><span>{post.fields.sac_dokulmesi}</span></div>
                        <div><span className="fw-bolder">Beslenme Şekliniz: </span><span>{post.fields.beslenme_sekli}</span></div>
                        <div><span className="fw-bolder">Burun akıntısı ve balgam sorunu:</span><span>{post.fields.burun_balgam}</span></div>
                        <div><span className="fw-bolder">Vesveseli takıntılı evhamlı mısınız?:</span><span>{post.fields.vesvese}</span></div>
                        <div><span className="fw-bolder">İnsülin direnciniz var mı?:</span><span>{post.fields.insilun_direnci}</span></div>
                        <div><span className="fw-bolder">Sabahları yorgun uyanır mısınız?:</span><span>{post.fields.sabah_yorgun}</span></div>
                        <div><span className="fw-bolder">Varis probleminiz var mı?: </span><span>{post.fields.varis}</span></div>
                        <div><span className="fw-bolder">Tansiyon durumunuz nasıl?: </span><span>{post.fields.tansiyon}</span></div>
                        <div><span className="fw-bolder">Uyandığında ağız tadınız nasıl?: </span><span>{post.fields.uyandiginda_agiz_tadi}</span></div>
                        <div><span className="fw-bolder">Günlük su tüketiminiz?: </span><span>{post.fields.gunluk_su}</span></div>
                        <div><span className="fw-bolder">Eliniz ayağınız üşür mü?:</span><span>{post.fields.el_ayak}</span></div>
                        <div><span className="fw-bolder">Anne Babası nasıldı?: </span><span>{post.fields.anne_baba_durumu}</span></div>
                        <div><span className="fw-bolder">Sigara Kullanıyormusunuz?: </span><span>{post.fields.sigara}</span></div>
                        <div><span className="fw-bolder">Kansızlık hikayeniz var mı?: </span><span>{post.fields.kansizlik}</span></div>
                    </div>
                    <div className="col">
                        
                        
                        <div><span className="fw-bolder">Saç şekliniz nasıl?:</span><span>{post.fields.sac_sekli}</span></div>
                        <div><span className="fw-bolder">Unutkanlık var mı?:</span><span>{post.fields.unutkanlik}</span></div>
                        <div><span className="fw-bolder">Kas yapısı nasıl?:</span><span>{post.fields.kas_yapisi}</span></div>
                        <div><span className="fw-bolder">Sabahları uyandığınızda salya akıntısı:</span><span>{post.fields.salya}</span></div>
                        <div><span className="fw-bolder">Uyku düzeniniz nasıldı?: </span><span>{post.fields.uyku_duzeni}</span></div>
                        <div><span className="fw-bolder">Çabuk parlayan biri misiniz?: </span><span>{post.fields.parlama_durumu}</span></div>
                        <div><span className="fw-bolder">Vücudunuz da gaz var mı?: </span><span>{post.fields.vucud_gazi}</span></div>
                        <div><span className="fw-bolder">Cildinizde kaşıntı, döküntü var mı?:</span><span>{post.fields.ciltte_kasinti}</span></div>
                        <div><span className="fw-bolder">Tiroidinizin çalışma durumu nedir?: </span><span>{post.fields.tirioid}</span></div>
                        <div><span className="fw-bolder">Göz beyazınızın rengi nasıl?: </span><span>{post.fields.goz_beyazi}</span></div>
                        <div><span className="fw-bolder">Dilinizin üzerindeki tabakanın rengi: </span><span>{post.fields.dil_rengi}</span></div>
                        <div><span className="fw-bolder">Günlük hayatta çoğunlukla kendinizi nasıl hissediyorsunuz?:</span><span>{post.fields.gunluk_hayatta_nasil}</span></div>
                        <div><span className="fw-bolder">Hareketli hantal olup olmama durumu?:</span><span>{post.fields.hareket_hantal}</span></div>
                        <div><span className="fw-bolder">Çocukluğunda beden şekli?: </span><span>{post.fields.cocuk_beden_sekli}</span></div>
                        <div><span className="fw-bolder">Dilininiz durumu nasıl?:</span><span>{post.fields.dilin_durumu}</span></div>
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col">
                        <div><span className="fw-bolder">Vücudunuzda sivilce çıkıyor mu?: </span><span>{post.fields.sivilce}</span></div>
                        {post.fields.sivilce === 'Evet' &&(
                            <div><span className="fw-bolder">Vücudunuz da sivilceler hangi bölgelerinizde çıkar:</span><span>{post.fields.sivilce_nerede}</span></div>
                        )}
                        
                        
                        <div><span className="fw-bolder">Gözlük kullanıyormusunuz?: </span><span>{post.fields.gozluk_durumu}</span></div>
                        {post.fields.gozluk_durumu === 'Evet' && (
                            <div><span className="fw-bolder">Gözlük dereceniz nedir?: </span><span>{post.fields.gozluk_derecesi}</span></div>
                        )}
                        

                        <div><span className="fw-bolder">Sürekli kullandığınız ilaç var mı?:</span><span>{post.fields.surekli_kullandigi_ilac}</span></div>
                        {post.fields.surekli_kullandigi_ilac === 'Var' &&(
                            <div><span className="fw-bolder">Sürekli kullandığınız ilaç adı:</span><span>{post.fields.surekli_kullandigi_ilac_adi}</span></div>
                        )}
                        
                        
                        <div><span className="fw-bolder">Hayatınızda travma yaşadınız mı? : </span><span>{post.fields.travma_durumu}</span></div>
                        {post.fields.travma_durumu === 'Evet' &&(
                            <>
                                <div><span className="fw-bolder">Travma sonrası herhangi bir hastalığa yakalandınız mı?: </span><span>{post.fields.travma_sonrasi_hastalik}</span></div>
                                <div><span className="fw-bolder">Travma sonrası yakalandığınız hastalık/lar nelerdir?: </span><span>{post.fields.travma_sonrasi_hastalik_adi}</span></div>
                            </>
                        )}
                        <div><span className="fw-bolder">Alerjik Durumu: </span><span>{post.fields.alerjik_durum}</span></div>
                        {post.fields.alerjik_durum === "Var" &&(
                            <div><span className="fw-bolder">Alerji olduğunuz bir şey var mı?: </span><span>{post.fields.alerji_oldugu_sey}</span></div>
                        )}
                    
                    </div>
                    <div className="col">
                        <div><span className="fw-bolder">Hormonal bir sıkıntınız var mı?: </span><span>{post.fields.hormonal_sikinti}</span></div>
                        {post.fields.hormonal_sikinti === "Evet" &&(
                            <div><span className="fw-bolder">Hormanal sıkıntılarınız nelerdir?: </span><span>{post.fields.hormonal_sikinti_nedir}</span></div>
                        )}
                        <div><span className="fw-bolder">Diş ve dişeti probleminiz var mı?: </span><span>{post.fields.dis_problemi}</span></div>
                        {post.fields.dis_problemi === "Var" &&(
                            <div><span className="fw-bolder">Diş eti probleminizi yazınız.: </span><span>{post.fields.dis_problemi_adi}</span></div>
                        )}
                        
                        
                        <div><span className="fw-bolder">Ameliyat geçirdiniz mi?: </span><span>{post.fields.ameliyat_durumu}</span></div>
                        {post.fields.ameliyat_durumu === "Evet" &&(
                            <>
                                <div><span className="fw-bolder">Herhangi bir organınız alındı mı?: </span><span>{post.fields.organ_alinmasi}</span></div>
                                <div><span className="fw-bolder">Hangi organınız alındı?: </span><span>{post.fields.hangi_organ_alindi}</span></div>
                            </>
                        )}
                        
                        <div><span className="fw-bolder">Daha önce hacamat yaptırdınız mı?: </span><span>{post.fields.hacamat}</span></div>
                        {post.fields.hacamat === "Evet" &&(
                            <>
                                <div><span className="fw-bolder">Yaptırdıysanız ne zaman yaptırdınız?: </span><span>{post.fields.hacamat_nezaman_yapildi}</span></div>
                                <div><span className="fw-bolder">Hangi bölgelerden hacamat yaptırdınız?: </span><span>{post.fields.hacamat_nerede_yapildi}</span></div>
                            </>
                        )}
                        


                        <div><span className="fw-bolder">Sülük yaptırdınız mı?: </span><span>{post.fields.suluk}</span></div>
                        {post.fields.suluk === "Evet" &&(
                            <>
                                <div><span className="fw-bolder">Sülük ne zaman yaptırdınız?: </span><span>{post.fields.suluk_ne_zaman}</span></div>
                                <div><span className="fw-bolder">Nerelerinize sülük yaptırdınız?: </span><span>{post.fields.suluk_nerelerde}</span></div>
                            </>
                        )}
                        <div><span className="fw-bolder">Sabah uyandığında belinde çizgı̇ şeklinde bir ağrı oluyor mu ve tuvalete gidip dolaştığın da azalıyor mu?: </span><span>{post.fields.sabah_uyandigin_beldeki_cizgi}</span></div>

                    </div>
                </div>
              
              {post.fields.cinsiyet === "Kadın" &&(
                <>
                    <div><span className="fw-bolder">Kistiniz var mı?:</span><span>{post.fields.kist}</span></div>
                    <div><span className="fw-bolder">Adetleriniz düzenli mi? Ağrılı mı?: </span><span>{post.fields.adet_duzeni}</span></div>
                    <div><span className="fw-bolder">Vajinal akıntı, mantar veya kaşıntı var mı?:</span><span>{post.fields.vajinal_akinti}</span></div>

                    {post.fields.medeni_durum === "Evli" &&(
                        <div className="row">
                            <div className="col">
                                <div><span className="fw-bolder">Eşinizle hangi sıklıkla birlikte oluyorsunuz?: </span><span>{post.fields.iliski}</span></div>
                                <div><span className="fw-bolder">O. oluyor musunuz?:</span><span>{post.fields.orgasm}</span></div>
                            </div>
                            <div className="col">
                                <div><span className="fw-bolder">Kaç doğum yaptınız?:</span><span>{post.fields.dogum_sayisi}</span></div>
                                <div><span className="fw-bolder">Doğum yapma şekliniz?: </span><span>{post.fields.dogum_yapma_sekli}</span></div>
                            </div>
                        </div>
                    )}
                     
                </>
              )}
              <div className="row">
                <div className="col"><span className="fw-bolder">Kullandığınız baharat ve bitki çayları?: </span><span>{post.fields.baharat_bitki_icecekleri}</span></div>
                <div className="col"><span className="fw-bolder">Eklemek istediğiniz rahatsızlıklarınız var mı?:</span><span>{post.fields.eklenen_hastalik}</span></div>
              </div>
              <div className="row">
                  <div className="col">
                    <div><span className="fw-bolder">Bundan sonraki eğitimlerimizden haberdar olmak istermisiniz?:</span><span>{post.fields.bundan_sonraki_egitim}</span></div>
                    <div><span className="fw-bolder">Sağlıklı yaşam programına ilk defamı katılıyorsunuz?: </span><span>{post.fields.programa_katilma_durumu}</span></div>
                  </div>
                  <div className="col">
                    <div><span className="fw-bolder">Bu programdan beklentileriniz nelerdir?:</span><span>{post.fields.program_beklentisi}</span></div>
                    <div><span className="fw-bolder">Daha önce kaç defa programa katıldınız?:</span><span>{post.fields.pograma_kac_defa_katildi}</span></div>
                  </div>
              </div>

            </div>
            
        </Layout>
    )
    
}