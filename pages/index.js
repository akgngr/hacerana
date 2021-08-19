import Saglikliyasam from '../lib/getSaglikliyasam'
import Layout from '../components/layout';
import DataTable from 'react-data-table-component';
import moment from 'moment'

export async function getStaticProps() {
  const posts = await Saglikliyasam();

  return {
    props: {
      posts,
    },
    revalidate: 180
  };
}

export default function Home({posts}) {

  const data = posts.map(post=>(
      { id: post.fields.id,
          ad_soyad: post.fields.ad_soyad,
          cinsiyet: post.fields.cinsiyet,
          yas: post.fields.yas,
          yasadigi_il: post.fields.yasadigi_il,
          created: moment(post.fields.created).format('d/m/Y')  ,
          islem: <a href={"/show/"+post.id}>see</a>
        }
  ));
    
  const columns = [
      {
          name: '#',
          selector: 'id',
          sortable: true,
      },
      {
          name: 'Ad Soyad',
          selector: 'ad_soyad',
          sortable: true,
      },
      {
          name: 'Cinsiyet',
          selector: 'cinsiyet',
          sortable: true,
      },
      {
          name: 'Yaş',
          selector: 'yas',
          sortable: true,
      },
      {
          name: 'Yaşadığı İl',
          selector: 'yasadigi_il',
          sortable: true,
      },
      {
          name: 'Oluşturma Tarihi',
          selector: 'created',
          sortable: true,
      },
      {
          name: 'İşlem',
          selector: 'islem'
      }
  ];

  const pagesHook = async () => {
    const response  = await fetch(process.env.PAGES_HOOK, {
      method: 'POST',
      mode: 'no-cors'
    })
    if(response) {
      alert('Başarılı bir şekilde form yenilendi. Lütfen 3 dakika sonra sayfayı yenileyin.')
    } else{
      alert('işlem başarısız.')
    }
  }

  return (
    <Layout> 
    <button onClick={pagesHook} className="btn btn-sm btn-success float-end">Formu Yenile</button>
      <DataTable
        defaultSortAsc="DESC"
        title="Sağlıklı Yaşam Formu"
        columns={columns}
        data={data}
      />
    </Layout>
  )
}










































































