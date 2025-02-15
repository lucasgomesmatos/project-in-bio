'use client';

import addCustomLinks from '@/app/actions/add-custom-links';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { startTransition, useState } from 'react';
import { Button } from '../../ui/button';
import Modal from '../../ui/modal';
import { TextInput } from '../../ui/text-input';

export default function AddCustomLink() {
  const router = useRouter();
  const { profileId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSavingCustomLinks, setIsSavingCustomLinks] = useState(false);

  const [links, setLink] = useState([
    {
      id: 1,
      title: '',
      url: '',
    },
    {
      id: 2,
      title: '',
      url: '',
    },
    {
      id: 3,
      title: '',
      url: '',
    },
  ]);

  const handleSaveCustomLinks = async () => {
    setIsSavingCustomLinks(true);
    if (!profileId) return;

    await addCustomLinks({
      profileId: profileId as string,
      links,
    });

    startTransition(() => {
      setIsModalOpen(false);
      setIsSavingCustomLinks(false);
      router.refresh();
    });
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
      >
        <Plus />
      </button>
      <Modal isOpen={isModalOpen} onClose={() => {}}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
          <p className="text-white font-bold text-xl">
            Adicionar links personalizados
          </p>
          <div className="flex flex-wrap gap-2">
            {links.map((link, index) => (
              <div key={link.id} className="flex gap-2">
                <div className="flex flex-col w-full">
                  <p>Título do link</p>
                  <TextInput
                    placeholder="Digite o título"
                    value={link.title}
                    onChange={(e) =>
                      setLink((prev) => {
                        const newLinks = [...prev];
                        newLinks[index].title = e.target.value;
                        return newLinks;
                      })
                    }
                  />
                </div>

                <div className="flex flex-col w-full">
                  <p className="font-bold">Link</p>
                  <TextInput
                    placeholder="Inserir URL"
                    value={link.url}
                    onChange={(e) =>
                      setLink((prev) => {
                        const newLinks = [...prev];
                        newLinks[index].url = e.target.value;
                        return newLinks;
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsModalOpen(false)}
              className="font-bold text-white"
            >
              Voltar
            </button>
            <Button
              onClick={handleSaveCustomLinks}
              disabled={isSavingCustomLinks}
            >
              Salvar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
